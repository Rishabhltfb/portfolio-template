import Spacer from "../common/spacer";
import AppAssets from "./assets";
import AppColors from "./colors";

const liStyle = {
    color: AppColors.greyColor,
    fontWeight: "400",
    paddingLeft: "30px",
    textIndent: "-30px",
};
const pStyle = {
    color: AppColors.greyColor,
    fontWeight: "400",
};

export const projectList = [
    {
        formatType: 2,
        title: "Wishup",
        description:
            "As a UI/UX designer, my passion lies in creating seamless UI.",
        img: AppAssets.project3,
        projectLink: "https://www.wishup.co/",
        domain: "Virtual Assistant SaaS Platform",
        bannerImg: AppAssets.project3Banner,
        mobileBanner: AppAssets.project3MobileBanner,
        demoImg1: AppAssets.project3Demo1,
        demoImg2: AppAssets.project3Demo2,
        role: "UX/UI Designer",
        category: "Mob app, Website Design",
        toolsUsed: "Figma, Jitter, Microsoft Clarity",
        overview:
            "Wishup is a web-based software solution that offers virtual assistant,  provides remote administrative and personal support services to clients through a team of skilled and trained professionals. Wishup offers a variety of virtual assistant plans that vary in hours and tasks performed to accommodate different budgets and needs.",
        problem:
            "Wishup's website was experiencing a high bounce rate and low lead generation, resulting in a low conversion rate. Despite having a user-friendly website, visitors weren’t staying on the site for long and weren’t converting into leads. The website's traffic is high, but the bounce rate is significantly high, indicating that visitors are leaving the site without taking any action. Upon further investigation, it was discovered that the website's content was not relevant to the target audience, and the website's design was not optimized for lead generation. Additionally, the website's navigation was not user-friendly, making it difficult for visitors to find what they were looking for.",
        goal: "The goal is to make the website more engaging, informative, and user-friendly to increase the time visitors spend on the site and encourage them to take the desired action, ultimately leading to a higher conversion rate and analysing UX data to measure the effectiveness of the redesign. The ultimate objective is to provide the top talent to the recruiters by providing a positive user experience that reflects the Wishup’s brand and values while streamlining the hiring process and increasing the conversion rate.",
        solution:
            "As a UX designer for a Virtual Assistant company's website, my primary goal was to create a user-friendly interface that attracts and retains customers, encouraging them to sign up for the company's virtual assistant services. To achieve this, I conducted interviews with the sales teams, product development teams, and marketing teams to gather information about their target audience, customer needs, and user pain points. Analysed Data using Microsoft Clarity, providing me with valuable insights into how to optimize the website's design for better engagement and user experience.",
        userInterview: [
            <li style={liStyle}>
                Interviewing the
                <i>
                    <strong> Sales Team</strong>{" "}
                </i>{" "}
                provided me with insights into the needs and wants of potential
                customers, their motivations for seeking virtual assistant
                services, and their expectations when it comes to website
                navigation, services offered, and pricing.
            </li>,
            <li style={liStyle}>
                The
                <i>
                    <strong> Product Development Team</strong>{" "}
                </i>{" "}
                was able to provide me with information about the features and
                capabilities of the company's virtual assistant services, which
                helped me understand how to best present these services on the
                website.
            </li>,
            <li style={liStyle}>
                The
                <i>
                    <strong> Marketing Team</strong>{" "}
                </i>{" "}
                provided me with insights into the company's branding,
                messaging, and marketing campaigns, which helped me align the
                website design with the company's overall marketing strategy.
            </li>,
        ],
        uxDataAnalysis:
            "To monitor the website's performance, I used Microsoft Clarity to analyze user behavior, including scroll depth, heatmaps, and clicks. Through this tool, I was able to identify the pages on the website that were most frequently visited and which sections of each page were the most engaging. I also identified areas where users tended to lose interest or abandon the website, providing me with valuable insights into how to optimize the website's design for better engagement and user experience.",
        keyFindings: [
            <p style={pStyle}>Key findings from the UX research included:</p>,
            <Spacer height={"4px"} />,
            <li style={liStyle}>
                The pain points of the audience include lack of time and
                resources, limited budgets, and difficulty finding reliable
                professionals.{" "}
            </li>,
            <li style={liStyle}>
                The company's unique value proposition is its ability to provide
                high-quality professionals at affordable rates with a quick
                turnaround time.
            </li>,
            <li style={liStyle}>
                Users had difficulty navigating the website and finding the
                information they needed.
            </li>,
            <li style={liStyle}>
                Call-to-action buttons were not prominent enough, resulting in
                low click-through rates.
            </li>,
            <li style={liStyle}>
                The website had a high bounce rate, indicating that users were
                leaving the website without taking any action.
            </li>,
            <li style={liStyle}>
                The use of visual elements such as images and videos was
                prominent on the competitors' websites.
            </li>,
            <br />,
            <p style={pStyle}>
                Based on the key findings, we recommended the following changes
                for the website redesign:
            </p>,
            <Spacer height={"4px"} />,
            <li style={liStyle}>
                Simplify the navigation and filter structure to make it easier
                for users to find information.
            </li>,
            <li style={liStyle}>
                Increase the prominence of call-to-action buttons to improve
                click-through rates.
            </li>,
            <li style={liStyle}>
                Use visual elements such as images and videos to make the
                website more engaging.
            </li>,
            <li style={liStyle}>
                Incorporate customer testimonials and social proof to build
                trust and credibility with the target audience.
            </li>,
        ],
        abTesting:
            "We used Microsoft Clarity to conduct A/B testing on different variations of the website design. We tracked user behavior such as click-through rates, time spent on each page, and bounce rates to determine which design elements were working and which ones needed improvement.",
        heatMaps: [
            <p style={pStyle}>
                We used Microsoft Clarity to generate heatmaps that showed where
                users were clicking and where they were not. This helped us
                understand which parts of the website were getting the most
                attention and which ones were being overlooked.
            </p>,
            <p style={pStyle}>
                Based on the feedback we received from these testing methods, we
                made several design changes to improve the user experience, such
                as simplifying the navigation, making calls to action more
                prominent, and reorganizing content to create a clearer visual
                hierarchy.
            </p>,
        ],
        impact: [
            <p style={pStyle}>
                After the new website was launched, we tracked several key
                metrics to measure its success.
            </p>,
            <li style={pStyle}>
                Saw a significant increase in website traffic, with a
                <i>
                    <strong> 25% increase in page views </strong>
                </i>
                and a
                <i>
                    <strong> 15% decrease in bounce rate.</strong>
                </i>
            </li>,
            <li style={pStyle}>
                The new profile and hiring page also led to an
                <i>
                    <strong> increase in leads, 10% conversion rate </strong>
                </i>
                compared to the previous pages.
            </li>,
            <li style={pStyle}>
                The user interface was justifying the value of the product
                making it sophisticated and interactive.
            </li>,
        ],
    },
    {
        formatType: 1,
        title: "Vegapay",
        description:
            "As a UI/UX designer, my passion lies in creating seamless UI.",
        img: AppAssets.project1,
        projectLink: "https://www.vegapay.tech/",
        domain: "Productivity Management SaaS Platform",
        bannerImg: AppAssets.project1Banner,
        mobileBanner: AppAssets.project1MobileBanner,
        demoImg1: AppAssets.project1Demo1,
        demoImg2: AppAssets.project1Demo2,
        role: "Lead UI Designer",
        category: "Web UI Design",
        toolsUsed: "Figma, Jitter, Webflow",
        overview:
            "For Vegapay, we have undertaken a comprehensive project to develop their brand identity, and design their entire website. I was actively involved in brainstorming sessions, creating wireframes, UI designs, and establishing a design system.",
        problem:
            "Vegapay lacked a cohesive brand identity and a user-friendly product suite. Their website did not effectively communicate their offerings. The absence of a unified design system resulted in time-consuming and redundant design efforts..",
        solution:
            "We tackled Vegapay's challenges by first creating a strong brand identity that reflects their vision and values. For their website, we designed a modern and intuitive interface, enabling clear communication of their services and enhanced user experience. I was engaged in thorough brainstorming sessions and wireframing to devise optimal solutions. Furthermore, Created motion graphics to enhance the user experience and to ensure a seamless user interface. Worked closely with developers to ensure accurate implementation of designs and technical requirements were met.",
        impact: [
            <li style={liStyle}>
                Overall, our efforts have resulted in increased customer
                acquisition, improved user engagement, and strengthened
                Vegapay's position as a leading player in their industry.
            </li>,
        ],
        showNda: true,
        nda: "Due to the non-disclosure agreement (NDA) that covers all my work at Hucentric for Vegapay, I won’t be able to share specific details about the project. However, if you’re up for a chat, feel free to reach out to me at dee.vag78@gmail.com.",
    },
    {
        formatType: 1,
        title: "Sketchnote",
        description:
            "As a UI/UX designer, my passion lies in creating seamless UI.",
        img: AppAssets.project2,
        projectLink: "https://sketchnote.co/",
        domain: "Productivity Management SaaS Platform",
        bannerImg: AppAssets.project2Banner,
        mobileBanner: AppAssets.project2MobileBanner,
        demoImg1: AppAssets.project2Demo1,
        demoImg2: AppAssets.project2Demo2,
        role: "UI Designer",
        category: "Web UI Design",
        toolsUsed: "Figma, Jitter, Webflow",
        overview:
            "Sketchnote is an all-in-one, power-packed project management tool. The platform is by entrepreneurs, for entrepreneurs. It specifically is targeted towards startups and mid-sized teams to enable learning, team collaboration, productivity, doc management and legal help.",
        problem:
            "Sketchnote came to Hucentric in their Beta phase, just as they were ready to launch the product, with some concerns around the retention rate. While it has served our users well, we've received feedback that the user interface (UI) is outdated and confusing to navigate. We want to update the app's design to make it more modern and user-friendly while still maintaining its core functionality.",
        solution:
            "Website redesign as the product had evolved over time and a redesign was required to convey the updated functionality and capabilities. Redesigned the website streamlining the workflow and improving the onboarding experience.",
        impact: [
            <li style={liStyle}>
                {" "}
                Through user testing and constant iterations, I was able to
                update the design of the existing Website. As a result we were
                able to{" "}
                <i>
                    <strong>increase the retention rate by 56%.</strong>{" "}
                </i>
            </li>,
            <li style={liStyle}>
                Created{" "}
                <i>
                    <strong>motion graphics</strong>
                </i>{" "}
                to enhance the user experience and developed the website using
                Webflow to ensure a seamless user interface.{" "}
            </li>,
        ],
        showNda: true,
        nda: "Due to the non-disclosure agreement (NDA) that covers all my work at Hucentric for Sketchnote, I won’t be able to share specific details about the project. However, if you’re up for a chat, feel free to reach out to me at dee.vag78@gmail.com.",
    },

    {
        formatType: 1,
        title: "ELEVARE SPORTS",
        description:
            "As a UI/UX designer, my passion lies in creating seamless UI.",
        img: AppAssets.project4,
        projectLink: "",
        domain: "Productivity Management SaaS Platform",
        bannerImg: AppAssets.project3Banner,
        mobileBanner: AppAssets.project1MobileBanner,
        demoImg1: AppAssets.project3Demo1,
        demoImg2: AppAssets.project3Demo2,
        role: "Lead UI Designer",
        category: "Web UI Design",
        toolsUsed: "Figma, Jitter, Webflow",
        overview:
            "Sketchnote is an all-in-one, power-packed project management tool. The platform is by entrepreneurs, for entrepreneurs. It specifically is targeted towards startups and mid-sized teams to enable learning, team collaboration, productivity, doc management and legal help.",
        problem:
            "Sketchnote came to Hucentric in their Beta phase, just as they were ready to launch the product, with some concerns around the retention rate. While it has served our users well, we've received feedback that the user interface (UI) is outdated and confusing to navigate. We want to update the app's design to make it more modern and user-friendly while still maintaining its core functionality.",
        solution:
            "Website redesign as the product had evolved over time and a redesign was required to convey the updated functionality and capabilities. Redesigned the website streamlining the workflow and improving the onboarding experience.",
        impact: [
            <li style={liStyle}>
                {" "}
                Through user testing and constant iterations, I was able to
                update the design of the existing Website. As a result we were
                able to{" "}
                <i>
                    <strong>increase the retention rate by 56%.</strong>{" "}
                </i>
            </li>,
            <li style={liStyle}>
                Created{" "}
                <i>
                    <strong>motion graphics</strong>
                </i>{" "}
                to enhance the user experience and developed the website using
                Webflow to ensure a seamless user interface.{" "}
            </li>,
        ],
        showNda: true,
        nda: "Due to the non-disclosure agreement (NDA) that covers all my work at Hucentric for Elevare, I won’t be able to share specific details about the project. However, if you’re up for a chat, feel free to reach out to me at dee.vag78@gmail.com.",
    },
];
