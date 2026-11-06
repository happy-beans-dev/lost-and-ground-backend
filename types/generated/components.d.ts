import type { Schema, Struct } from '@strapi/strapi';

export interface HeroHeroBadge extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_badges';
  info: {
    displayName: 'Hero Badge';
  };
  attributes: {
    badges: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface HeroHeroButtons extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_buttons';
  info: {
    displayName: 'Hero Buttons';
  };
  attributes: {
    ourStory: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    shopNow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface IngredientsIngredientCards extends Struct.ComponentSchema {
  collectionName: 'components_ingredients_ingredient_cards';
  info: {
    displayName: 'Ingredient Cards';
  };
  attributes: {
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface ProcessProcessCards extends Struct.ComponentSchema {
  collectionName: 'components_process_process_cards';
  info: {
    displayName: 'Process Cards';
  };
  attributes: {
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedTextCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_cards';
  info: {
    displayName: 'Text Card';
  };
  attributes: {};
}

export interface ShopShopButtons extends Struct.ComponentSchema {
  collectionName: 'components_shop_shop_buttons';
  info: {
    displayName: 'Shop Buttons';
  };
  attributes: {
    addToBasket: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    viewAll: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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
