import type { Schema, Struct } from '@strapi/strapi';

export interface HeroHeroBadge extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_badges';
  info: {
    displayName: 'Hero Badge';
  };
  attributes: {
    badge0: Schema.Attribute.String;
    badge1: Schema.Attribute.String;
    badge2: Schema.Attribute.String;
  };
}

export interface HeroHeroButtons extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_buttons';
  info: {
    displayName: 'Hero Buttons';
  };
  attributes: {
    ourStory: Schema.Attribute.String;
    shopNow: Schema.Attribute.String;
  };
}

export interface IngredientsIngredientCards extends Struct.ComponentSchema {
  collectionName: 'components_ingredients_ingredient_cards';
  info: {
    displayName: 'Ingredient Cards';
  };
  attributes: {
    card0: Schema.Attribute.Component<'shared.text-card', false>;
    card1: Schema.Attribute.Component<'shared.text-card', false>;
    card2: Schema.Attribute.Component<'shared.text-card', false>;
  };
}

export interface ProcessProcessCards extends Struct.ComponentSchema {
  collectionName: 'components_process_process_cards';
  info: {
    displayName: 'Process Cards';
  };
  attributes: {
    card0: Schema.Attribute.Component<'shared.text-card', false>;
    card1: Schema.Attribute.Component<'shared.text-card', false>;
    card2: Schema.Attribute.Component<'shared.text-card', false>;
    card3: Schema.Attribute.Component<'shared.text-card', false>;
  };
}

export interface SharedTextCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_cards';
  info: {
    displayName: 'Text Card';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ShopShopButtons extends Struct.ComponentSchema {
  collectionName: 'components_shop_shop_buttons';
  info: {
    displayName: 'Shop Buttons';
  };
  attributes: {
    addToBasket: Schema.Attribute.String;
    viewAll: Schema.Attribute.String;
  };
}

export interface StoryStoryButton extends Struct.ComponentSchema {
  collectionName: 'components_story_story_buttons';
  info: {
    displayName: 'Story Button';
  };
  attributes: {
    learnMore: Schema.Attribute.String;
  };
}

export interface SustainabilitySustainabilityCards
  extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_sustainability_cards';
  info: {
    displayName: 'Sustainability Cards';
  };
  attributes: {
    card0: Schema.Attribute.Component<'shared.text-card', false>;
    card1: Schema.Attribute.Component<'shared.text-card', false>;
    card2: Schema.Attribute.Component<'shared.text-card', false>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'hero.hero-badge': HeroHeroBadge;
      'hero.hero-buttons': HeroHeroButtons;
      'ingredients.ingredient-cards': IngredientsIngredientCards;
      'process.process-cards': ProcessProcessCards;
      'shared.text-card': SharedTextCard;
      'shop.shop-buttons': ShopShopButtons;
      'story.story-button': StoryStoryButton;
      'sustainability.sustainability-cards': SustainabilitySustainabilityCards;
    }
  }
}
