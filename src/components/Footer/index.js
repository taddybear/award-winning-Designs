import styled from "styled-components";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

const RightText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    /* filter: invert(100%); */
    color: black;
    transition: all 0.2s ease-in-out;
  }
`;
const LeftText = styled.div`
  text-align: left;
`;

const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        © 2021 Built by <a href="null">@Ryan O'Reilly</a>
        <br />© 2021 designed by <a href="null">@CodeBugs</a>
      </LeftText>

      <RightText>
        Reach out to me via 😉
        <a href="https://github.com">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Font_Awesome_5_brands_github-square.svg/1200px-Font_Awesome_5_brands_github-square.svg.png"
            alt="Github"
          />
        </a>
        &nbsp;
        <a href="https://www.instagram.com/xryanoreilly/">
          <img
            src="https://user-images.githubusercontent.com/24874033/39674914-011fd850-5171-11e8-82b5-01e8613114cf.png"
            alt="Instagram"
          />
        </a>
        &nbsp;
        <a href="mailto:rsvoreilly@gmail.com?subject=Email From Your Website">
          <img
            src="https://icon-library.com/images/free-email-icon-vector/free-email-icon-vector-17.jpg"
            alt="Gmail"
          />
        </a>
      </RightText>
    </FOOTER>
  );
};

export default Footer;

//© 2021 by CodeBucks. Design by @CodeBucks.
