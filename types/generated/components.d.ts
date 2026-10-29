import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    primaryButton: Schema.Attribute.Component<'shared.link', false>;
    secondaryButton: Schema.Attribute.Component<'shared.link', false>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface SectionsIngredientsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_ingredients_sections';
  info: {
    displayName: 'Ingredients Section';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    Items: Schema.Attribute.Component<'shared.ingredient-item', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface SectionsProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_process_sections';
  info: {
    displayName: 'Process Section';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsShopSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_shop_sections';
  info: {
    displayName: 'Shop Section';
  };
  attributes: {
    addToBasketLabel: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    viewAllButton: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface SectionsStorySection extends Struct.ComponentSchema {
  collectionName: 'components_sections_story_sections';
  info: {
    displayName: 'Story Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.link', false>;
    image: Schema.Attribute.Media<'images' | 'files'>;
    summary: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface SectionsSustainabilitySection extends Struct.ComponentSchema {
  collectionName: 'components_sections_sustainability_sections';
  info: {
    displayName: 'Sustainability Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface SharedIngredientItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_ingredient_items';
  info: {
    displayName: 'Ingredient Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_process_steps';
  info: {
    displayName: 'Process Step';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSustainabilityPractice extends Struct.ComponentSchema {
  collectionName: 'components_shared_sustainability_practices';
  info: {
    displayName: 'Sustainability Practice';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'sections.hero': SectionsHero;
      'sections.ingredients-section': SectionsIngredientsSection;
      'sections.process-section': SectionsProcessSection;
      'sections.shop-section': SectionsShopSection;
      'sections.story-section': SectionsStorySection;
      'sections.sustainability-section': SectionsSustainabilitySection;
      'shared.ingredient-item': SharedIngredientItem;
      'shared.link': SharedLink;
      'shared.process-step': SharedProcessStep;
      'shared.sustainability-practice': SharedSustainabilityPractice;
    }
  }
}
