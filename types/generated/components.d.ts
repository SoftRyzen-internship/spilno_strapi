import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockAnalysis extends Schema.Component {
  collectionName: 'components_block_analyses';
  info: {
    displayName: 'analysis';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0410\u043D\u0430\u043B\u0456\u0437'>;
    description: Attribute.Text & Attribute.Required;
    img: Attribute.Media & Attribute.Required;
    alt: Attribute.String & Attribute.Required;
  };
}

export interface BlockDecisionItem extends Schema.Component {
  collectionName: 'components_block_decision_items';
  info: {
    displayName: 'decisionItem';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface BlockDecision extends Schema.Component {
  collectionName: 'components_block_decisions';
  info: {
    displayName: 'decision';
    icon: '';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0420\u0456\u0448\u0435\u043D\u043D\u044F'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    decisionList: Attribute.Component<'block.decision-item', true> &
      Attribute.Required;
    decisionImgFirst: Attribute.Media & Attribute.Required;
    decisionImgSecond: Attribute.Media & Attribute.Required;
    decisionImgThird: Attribute.Media & Attribute.Required;
    altFirst: Attribute.String & Attribute.Required;
    altSecond: Attribute.String & Attribute.Required;
    altThird: Attribute.String & Attribute.Required;
  };
}

export interface BlockProblems extends Schema.Component {
  collectionName: 'components_block_problems';
  info: {
    displayName: 'problems';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 '>;
    description: Attribute.Text & Attribute.Required;
    problemsImgFirst: Attribute.Media & Attribute.Required;
    problemsImgSecond: Attribute.Media & Attribute.Required;
    altFirst: Attribute.String & Attribute.Required;
    altSecond: Attribute.String & Attribute.Required;
  };
}

export interface BlockResult extends Schema.Component {
  collectionName: 'components_block_results';
  info: {
    displayName: 'result';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442'>;
    description: Attribute.Text & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.analysis': BlockAnalysis;
      'block.decision-item': BlockDecisionItem;
      'block.decision': BlockDecision;
      'block.problems': BlockProblems;
      'block.result': BlockResult;
    }
  }
}
