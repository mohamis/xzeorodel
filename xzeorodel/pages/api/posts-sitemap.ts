// Import built-in types for API routes
import { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise, EnumChangefreq } from "sitemap";
import { createGzip } from "zlib";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!res) return {};
  try {
    // Set response header
    res.setHeader("content-type", "application/xml");
    res.setHeader("Content-Encoding", "gzip");

    // A Transform for turning a Readable stream of either SitemapItemOptions or url strings into a Sitemap.
    // The readable stream it transforms must be in object mode.
    const smStream = new SitemapStream({
      hostname: "https://xeozrodel.fr",
    });

    const pipeline = smStream.pipe(createGzip());
    // Add any static entries here
    smStream.write({
      url: "/",
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.WEEKLY,
    });
    smStream.write({
      url: "/about",
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.MONTHLY,
    });
    smStream.write({
      url: "/reservations",
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.MONTHLY,
    });
    smStream.write({
      url: "/services",
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.MONTHLY,
    });
    smStream.write({
      url: "/blog",
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.WEEKLY,
    });
    // E.g. we create a sitemap.xml for articles
    // Set articles change frequencey is weekly

    smStream.end();

    // cache the response
    // streamToPromise.then(sm => sitemap = sm)
    streamToPromise(pipeline);
    // stream the response
    pipeline.pipe(res).on("error", (e) => {
      throw e;
    });
  } catch (e) {
    res.status(500).end();
  }
}
