module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {
          folder: env('CLOUDINARY_FOLDER', ''),
        },
        delete: {},
      },
    },
  },
  graphql: {
    config: {
      defaultLimit: 100,
    },
  },
   "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        env('VERCEL_DEPLOY_HOOK'),
      apiToken: env('VERCEL_API_TOKEN'),
      appFilter: env('VERCEL_APP_ID'),
      teamFilter: env('VERCEL_TEAM_ID'),
      roles: ["strapi-super-admin", "strapi-editor"],
    },
  },
  // ...
});
