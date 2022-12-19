import React from "react";
import bannerimage from "../assets/home-fb-banner.png";
import wcu from "../assets/WCU.jpg";
import wsua from "../assets/Placeholder.jpg";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <div className="home-body">
      <div className="home-first-block">
        <div className="home-shared home-fb first-block-left">
          <h1>
            We build custom, mobile-first software designed to make your life
            easier.
          </h1>
          <br />
          <h4>
            We build reliable software that helps businesses and organizations
            thrive. Our solutions are designed to be efficient, user-friendly,
            and scalable, ensuring they meet the evolving needs of our clients.
          </h4>
        </div>
        <div className=" home-shared home-fb first-block-right">
          <img src={bannerimage} className="home-fb-banner-image" />
        </div>
      </div>
      <div className="home-shared">
        <h3>Reliable tech partner ready to support your project's success.</h3>
        <Button className="home-ltBtn" variant="warning">
          Let's Talk
        </Button>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="heading">
          <h1>Trusted Custom Software Development for Your Business Needs</h1>
        </div>
        <div className="card">
          <h3>Design and development of custom software solutions</h3>
          <p>
            We specialize in creating tailored software solutions that meet the
            unique needs and requirements of our clients. Our team of
            experienced developers is skilled in a variety of programming
            languages and technologies, allowing us to deliver high-quality,
            reliable software that meets the specific needs of your business.
          </p>
        </div>
        <div className="card">
          <h3>Integration and automation of business processes</h3>
          <p>
            We offer a range of services to help streamline and automate your
            business processes, including integration with third-party systems
            and custom automation solutions. By leveraging the latest
            technologies and approaches, we can help you improve efficiency and
            reduce manual labor, freeing up time and resources for your business
            to focus on more important tasks.
          </p>
        </div>
        <div className="card">
          <h3>Maintenance and support</h3>
          <p>
            We understand that software is an ongoing investment, and that's why
            we offer comprehensive maintenance and support services to ensure
            that your systems are always running smoothly. From bug fixes and
            updates to troubleshooting and emergency support, we are here to
            help you get the most out of your software investment.
          </p>
        </div>
        <div className="card">
          <h3>Training and consulting</h3>
          <p>
            Our team of experts is available to provide training and consulting
            services to help you get the most out of your software. We can help
            you understand the capabilities of your software, provide best
            practices and tips, and offer guidance on how to leverage it to its
            full potential. Whether you're a small business owner looking to get
            started with software or an experienced IT professional seeking to
            optimize your systems, we have the knowledge and expertise to help
            you succeed.
          </p>
        </div>
      </div>
      <img
        src={wsua}
        alt="My Image"
        style={{ width: "100%", height: "auto" }}
      />
      <h2>Elevating your business with innovative software solutions.</h2>

      <div className="software-services-overview">
        <div className="service">
          <i className="fas fa-cog"></i>
          <h3>Innovation and Efficiency</h3>
          <p>
            Our company provides software development services with a focus on
            innovation and efficiency to help businesses create innovative and
            efficient solutions.
          </p>
        </div>
        <div className="service">
          <i className="fas fa-users"></i>
          <h3>Experienced Team</h3>
          <p>
            We have an experienced team of developers skilled in a variety of
            programming languages and technologies, and we work closely with our
            clients to understand their specific needs and goals.
          </p>
        </div>
        <div className="service">
          <i className="fas fa-clipboard-check"></i>
          <h3>Comprehensive Project Management</h3>
          <p>
            Our project management process includes regular progress updates and
            the ability for clients to provide input and feedback throughout the
            development process. We also offer extensive testing and quality
            assurance to ensure that our products meet the highest standards.
          </p>
        </div>
        <div className="service">
          <i className="fas fa-lightbulb"></i>
          <h3>Consulting Services</h3>
          <p>
            In addition to traditional software development, we also offer
            consulting services to help businesses brainstorm and strategize for
            their product development. Our team has a wealth of industry
            knowledge and can provide valuable insights and recommendations to
            help clients bring their ideas to fruition.
          </p>
        </div>
      </div>
      <br />

      <div className="home-what-sets-us-apart">
        <div style={{ flex: 1, padding: "10px" }}>
          <img
            src={wcu}
            alt="My Image"
            style={{ width: "100%", height: "auto", maxHeight: "1000px" }}
          />
        </div>
        <div style={{ flex: 1, padding: "10px", flexWrap: "wrap" }}>
          <h3 style={{ margin: 0 }}>What sets us apart ?</h3>
          <br />
          <br />
          <p style={{ fontSize: "120x" }}>
            At our software consulting company, we believe that the key to
            successful product development lies in collaboration and a deep
            understanding of our clients' needs and goals. We strive to be more
            than just a service provider, but rather a true partner in the
            product creation process. To this end, we prioritize clear and open
            communication with our clients, as well as a flexible and agile
            approach to project management.
            <br />
            We believe that by working closely with our clients and adapting to
            their changing needs, we can create innovative and high-quality
            products that truly meet their needs and exceed their expectations.
            Additionally, we are committed to upholding the highest ethical
            standards in our work. We believe in transparency, honesty, and
            professionalism, and strive to build trust with our clients through
            every interaction. Overall, our philosophy at our software
            consulting company is centered on delivering exceptional value to
            our clients through collaboration, flexibility, and integrity.
          </p>
        </div>
      </div>
    </div>
  );
}
