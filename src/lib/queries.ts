import { gql } from "graphql-request";

// =======================
// FOOTER
// =======================
export const FOOTER_QUERY = gql`
  query GetFooter {
    siteInfo {
      phone
      whatsapp
      instagram
      facebook
      address
      hours
      footer_text
    }
  }
`;

// =======================
// MAIN HERO
// =======================
export const MAIN_HERO_QUERY = gql`
  query GetMainHero {
    mainHero {
      eyebrow
      title
      subtitle
      button_text
      button_url
      images
    }
  }
`;

// =======================
// ABOUT JARDOR
// =======================
export const ABOUT_JARDOR_QUERY = gql`
  query GetAboutJardor {
    aboutJardor {
      eyebrow
      title
      subtitle
      content
      images
    }
  }
`;

export const CULINARY_PHILOSOPHY_QUERY = gql`
  query GetCulinaryPhilosophy {
    culinaryPhilosophy {
      eyebrow
      title
      subtitle
      content
      images
    }
  }
`;