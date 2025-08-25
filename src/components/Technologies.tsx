import React from "react";

interface ITechItem {
  name: string;
  logo?: string;
}

function Technologies() {
  const FE: ITechItem[] = [
    {
      name: "reactjs",
    },
    {
      name: "vuejs",
    },
    {
      name: "react-native",
    },
    {
      name: "redux",
    },
    {
      name: "zustand",
    },
  ];
  const BE: ITechItem[] = [
    {
      name: "nodejs",
    },
    {
      name: "django",
    },
    {
      name: "expressjs",
    },
  ];

  const tools: ITechItem[] = [
    {
      name: "VS code",
    },
    { name: "Postman" },
  ];

  const operatingSytem: ITechItem[] = [
    {
      name: "windows",
    },
    {
      name: "linux",
    },
  ];

  const devOps: ITechItem[] = [
    {
      name: "AWS",
    },
    {
      name: "azure",
    },
    {
      name: "docker",
    },
    {
      name: "firebase",
    },
    {
      name: "vercel",
    },
    {
      name: "flyio",
    },
    {
      name: "netfily",
    },
    {
      name: "heroku",
    },
    {
      name: "render",
    },
  ];

  return <div>Technologies</div>;
}

const TechnologyCard = () => {
  return <div></div>;
};

export default Technologies;
