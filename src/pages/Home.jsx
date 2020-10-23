import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import JumbotronContainer from "../containers/JumbotronContainer";
import FaqsContainer from "../containers/FaqsContainer";
import FooterContainer from "../containers/FooterContainer";
import { OptForm, Feature } from "../components/components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder="Email Address"></OptForm.Input>
            <OptForm.Button>Try It Now</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
