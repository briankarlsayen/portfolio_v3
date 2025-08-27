export const sendEmail = async (email: string) => {
  const url = "https://sleipnir.vercel.app/sendmail";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: "blu3fire89@gmail.com",
      from: "Portfolio_v3",
      subject: "Get in touch",
      message: `Email ${email} has contacted you through your portfolio https://briansayen.netlify.app.`,
    }),
  };
  const response = await fetch(url, options)
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error));
  return response;
};
