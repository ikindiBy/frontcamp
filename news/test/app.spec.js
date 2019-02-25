const proxyquire = require("proxyquire");
const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const should = chai.should();

const articlesMock = [
  {
    _id: "0123",
    heading: "aaa",
    content: "aaa sss yyy",
    description: "a",
    publishedAt: "2019",
    author: "Rob",
    urlToImage: "//mock1"
  },
  {
    _id: "8787",
    heading: "tyu",
    content: "tyu ssstyu yyy",
    description: "tyua",
    publishedAt: "2018",
    author: "Bebeshka",
    urlToImage: "//mock2"
  }
];

const articleMock = articlesMock[0];

function ItemNewsMock() {
  return ItemNewsMock;
}

const errorMessage = "Error!";

// const app = proxyquire("../app", {
//   "./routes": {
//     articles: {
//       articles: proxyquire("../routes", {
//         "../models": {
//           ItemNews: ItemNewsMock
//         }
//       })
//     }
//   }
// });

// let findCbArgs;

// ItemNewsMock.find = (filter, cb) => {
//   console.log("---------------------");
//   cb(...findCbArgs);
// };

const app = proxyquire("../app", {
  passport: {
    use: () => {},
    initialize: () => {
      return (req, res, next) => next();
    },
    session: () => {
      return (req, res, next) => next();
    }
  }
});

chai.use(chaiHttp);

describe("app", () => {
  describe("GET to /admin", () => {
    it("should return Admin greting", done => {
      chai
        .request(app)
        .get("/admin")
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.eql("Admin hello");
          done();
        });
    });
  });

  //   describe("GET to /logout", () => {
  //     it("should redirect to /", done => {
  //       chai
  //         .request(app)
  //         .get("/logout")
  //         // .expect("Location", "/")
  //         .end((err, res) => {
  //           //   res.should.have.status(200);
  //           res.header["location"].should.include("/");
  //           done();
  //         });
  //     });
  //   });
});
