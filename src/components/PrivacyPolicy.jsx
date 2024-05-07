import Container from "./Container";
import "../stylesheets/build/Privacy.css";
import { NavLink } from "react-router-dom";
import useVersionPath from "../hooks/useVersionPath";
import useVersionClass from "../hooks/useVersionClass";

export default function PrivacyPolicy() {
  const baseURL = useVersionPath();
  return (
    <>
      <div className={useVersionClass("privacy")}>
        <Container classToAdd="privacy-container">
          <img src={`${baseURL}/policy.png`} alt="privacy policy icon" />
          <h1>Privacy Policy</h1>
          <p>Last updated: February 2, 2024</p>
          <p>
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit our web page (the
            “Site”).
          </p>
          <h2>Personal information we collect.</h2>
          <p>
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that
            you view, what websites or search terms referred you to the Site,
            and information about how you interact with the Site. We refer to
            this automatically-collected information as “Device Information”.
          </p>
          <p>
            We collect Device Information using the following technologies: –
            “Cookies” are data files that are placed on your device or computer
            and often include an anonymous unique identifier. For more
            information about cookies, and how to disable cookies, visit{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.allaboutcookies.org"
            >
              http://www.allaboutcookies.org.
            </a>{" "}
            – “Log files” track actions occurring on the Site, and collect data
            including your IP address, browser type, Internet service provider,
            referring/exit pages, and date/time stamps. – “Web beacons”, “tags”,
            and “pixels” are electronic files used to record information about
            how you browse the Site.
          </p>
          <p>
            Additionally, when you make a request for contact through the Site,
            we collect certain information from you, including your name, and
            phone number. We refer to this information as “Request Information”.
          </p>
          <p>
            When we talk about “Personal Information” in this Privacy Policy, we
            are talking both about Device Information and Request Information.
          </p>
          <h2>How do we use your personal information?</h2>
          <p>
            We use the Request Information that we collect generally to
            communicate with you.
          </p>
          <p>
            We use the Device Information that we collect to help us screen for
            potential risk and fraud (in particular, your IP address), and more
            generally to improve and optimize our Site (for example, by
            generating analytics about how our customers browse and interact
            with the Site, and to assess the success of our marketing and
            advertising campaigns).
          </p>
          <h2>Sharing your Personal Information.</h2>
          <p>
            We share your Personal Information with third parties to help us use
            your Personal Information, as described above. For example, we use
            Google Analytics to help us understand how our customers use the
            Site — you can read more about how Google uses your Personal
            Information here:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/intl/en/policies/privacy/"
            >
              https://www.google.com/intl/en/policies/privacy/
            </a>
            . You can also opt-out of Google Analytics here:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://tools.google.com/dlpage/gaoptout"
            >
              {" "}
              https://tools.google.com/dlpage/gaoptout
            </a>
            .
          </p>
          <p>
            Finally, we may also share your Personal Information to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant or other lawful requests for information we receive, or to
            otherwise protect our rights.
          </p>
          <h2>Behavioral advertising.</h2>
          <p>
            As described above, we use your Personal Information to provide you
            with targeted advertisements or marketing communications we believe
            may be of interest to you. For more information about how targeted
            advertising works, you can visit the Network Advertising
            Initiative’s (“NAI”) educational page at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
            >
              http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
            </a>
            .
          </p>
          <p>
            You can opt out of targeted advertising by using the next links for:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/settings/?tab=ads"
            >
              Facebook
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/settings/ads/anonymous"
            >
              Google
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
            >
              Bing
            </a>
            . Additionally, you can opt out of some of these services by
            visiting the{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="http://optout.aboutads.info/."
            >
              Digital Advertising Alliance’s opt-out portal
            </a>
            .
          </p>
          <p>
            Please note that we do not alter our Site’s data collection and use
            practices when we see a Do Not Track signal from your browser.
          </p>
          <h2>Your rights.</h2>
          <p>
            If you are a United States resident, you have the right to access
            personal information we hold about you and to ask that your personal
            information be corrected, updated, or deleted. If you would like to
            exercise this right, please contact us through the contact
            information below.
          </p>
          <p>
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.
          </p>
          <h2>Contact us</h2>
          <p>
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please reach us
            at{" "}
            <a target="_blank" rel="noreferrer" href="info@pandoplumbing.com">
              our email
            </a>
            .
          </p>
          <NavLink to={"/"}>
            <div className={useVersionClass("privacy-back-home")}>
              <img src={`${baseURL}/back-home-arrow.png`} />
              <p>Back to Home Page</p>
            </div>
          </NavLink>
        </Container>
      </div>
    </>
  );
}
