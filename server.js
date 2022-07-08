require("dotenv").config();
const { default: axios } = require("axios");
const express = require("express");

const app = express();
const port = 3000;
const clientId = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const grant_type = process.env.GRANT_TYPE;
const redirect_uri = process.env.REDIRECT_URI;

app.get("/", (req, res) => {
  res.send("tron testing!");
});

app.get("/profile", async (req, res) => {
  let { code } = req.query;
  let body = new URLSearchParams({
    client_id: clientId,
    client_secret: client_secret,
    grant_type: grant_type,
    code: code,
    redirect_uri: redirect_uri,
  });
  const { access_token, token_type } = await axios
    .post("https://discord.com/api/oauth2/token", body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => res.data);
  console.log(code, body, access_token, token_type);
  let profile;
  try {
    profile = await axios
      .get("https://www.discord.com/api/v10/users/@me", {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((res) => res.data);
  } catch (err) {
    profile = "";
    console.log(err);
  }

  res.json({ code, access_token, profile });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
