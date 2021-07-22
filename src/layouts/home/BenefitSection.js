import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { HeroCategory } from "../../components/hero/HeroCategory.js";
import { HeroTitle } from "../../components/hero/HeroTitle.js";
import { HeroBody } from "../../components/hero/HeroBody.js";
import { HeroCtaContainer } from "../../components/hero/HeroCtaContainer.js";
import { HeroGraphic } from "../../components/hero/HeroGraphic.js";
import { Hero } from "../../components/hero/Hero.js";
import { Cta } from "../../components/hero/Cta.js";
import content from "../../../contents/home-page/home.yml";
import links from "../../../contents/links.yml";
import labels from "../../../contents/labels.yml";
import { ExternalLink } from "../../components/ExternalLink.js";

const {
  heroBenefit: { category, title, body, ctaAriaLabel, altImg },
} = content;

const {
  internalLinks: { enablement: benefitHero },
} = links;
const { showVideo } = labels;

export const BenefitSection = () => (
  <Hero bgColor="light">
    <div id="comefunziona" className="row align-items-center px-lg-5">
      <HeroGraphic className="col-lg-6 p-0">
        <StaticImage
          src="../../images/section02.png"
          alt={altImg}
          aria-label={altImg}
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
        />
      </HeroGraphic>
      <div className="col-lg-6 p-0 pl-lg-5">
        <div className="text-center text-lg-left mt-3 mt-lg-0 pl-lg-3">
          <HeroCategory title={category} />
          <HeroTitle title={title} className="primary-color" />
          <HeroBody html={body} />
          <HeroCtaContainer>
            <ExternalLink
              linkTo={benefitHero.linkTo}
              ariaLabel={ctaAriaLabel}
              className="btn text-uppercase mx-4 ml-lg-0 my-2 btn-primary"
            >
              {showVideo}
            </ExternalLink>
          </HeroCtaContainer>
        </div>
      </div>
    </div>
  </Hero>
);
