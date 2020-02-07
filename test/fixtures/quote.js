exports.input = {
  text: "Some text",
  entities: {
    urls: [
      {
        expanded_url: "https://twitter.com/kek/status/12345",
        indices: [0, 0]
      }
    ]
  },
  quoted_status: {
    id_str: "12345",
    text: "Some quote"
  }
};

exports.output = `Some text

> Some quote`;
