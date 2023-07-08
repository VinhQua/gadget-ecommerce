require("dotenv").config();

const Airtable = require("airtable-node");
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);
exports.handler = async (event, context, cb) => {
  try {
    const res = await airtable.list({ maxRecords: 200 });

    const products = res.records.map((product) => {
      const { id, fields } = product;
      const {
        name,
        price,
        featured,
        images,
        description,
        colors,
        company,
        stock,
        stars,
        reviews,
        category,
        shipping,
      } = fields;
      const { url } = images[0];
      return {
        id,
        name,
        price,
        featured,
        image: url,
        description,
        colors,
        company,
        stock,
        stars,
        reviews,
        category,
        shipping,
      };
    });
    // console.log("######");
    // console.log(products);
    // console.log("######");
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: "There was an error",
    };
  }
};
