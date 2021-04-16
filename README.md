<h1 align="center">
  Linkinbio
</h1>
<p align="center">
  Originally created by <a href="https://dev.to/timrodz/creating-a-gatsby-portfolio-that-shows-your-instagram-posts-4m24">Juan Alejandro Morais</a>
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/bbfc1505-2383-481b-8640-2b0e1d5e6d33/deploy-status)](https://app.netlify.com/sites/lkup/deploys)

Whoever is reading this, I pity you from the depths of my heart. But, you need to regenerate tokens almost every 2 months to put into Netlify so that builds succeed.

Steps for that, as taken from [here](https://github.com/oorestisime/gatsby-source-instagram#readme):
## Instagram Graph API token

** Disclaimer: ** These steps might not be clear, or not exactly working for everybody. Working on updated or automated steps right now. Progress is at https://github.com/oorestisime/gatsby-source-instagram/issues/24
Any help on this side is greatly welcomed and appreciated!

1. You need to have a Facebook page (I know... :/)
1. Go to your site settings -> Instagram -> Login into your Instagram account
1. Create a [app](https://developers.facebook.com/apps/)
1. Go to the [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
   1. Make sure you are using v7 as api version
   1. Select your facebook app
   1. Click "Generate Access Token"
   1. Add the following permissions (pages_manage_ads, pages_manage_metadata, pages_read_engagement, pages_read_user_content, pages_show_list, instagram_basic)
   1. Make a GET request at `me/accounts`
   1. copy the access_token in the response (we call this **temporary_token**)
   1. click on the id to change the explorer url and append `?fields=instagram_business_account&access_token={access-token}`
   1. save your `instagram_business_account.id`, this is your **instagram_id**
1. [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/):
   1. Paste your temporary_token and press "Debug"
   1. You should see this token now expires in 3 months
   1. Press "Extend Access Token" and press the new debug that appears next to the token
   1. You should see this token now never expires
   1. Copy this new token (we will call this **access_token**)
   1. Use this in your .env.development or .env.production as the value for INSTA_ACCESS_TOKEN

With these two information you can now use the plugin as:

```
{
  resolve: `gatsby-source-instagram`,
  options: {
    username: username,
    access_token: access_token,
    instagram_id: instagram_id,
  },
},
```