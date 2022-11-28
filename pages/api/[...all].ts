import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";
import { getAccessToken } from "@auth0/nextjs-auth0";

const middleware = async (req: NextApiRequest, res: NextApiResponse) => {
  const middlewareParams = {
    changeOrigin: true,
    target: process.env.GRAPHQL_URL,
    pathRewrite: [
      {
        patternStr: "^/api/graphql",
        replaceStr: "/graphql",
      },
    ],
  };

  const { accessToken = "" } = await getAccessToken(req, res, {
    scopes: ["openid", "profile", "email", "offline_access"],
  }).catch(() => {
    return httpProxyMiddleware(req, res, middlewareParams);
  });

  return httpProxyMiddleware(req, res, {
    ...middlewareParams,
    headers: { authorization: accessToken, cookie: "" },
  });
};

export default middleware;
