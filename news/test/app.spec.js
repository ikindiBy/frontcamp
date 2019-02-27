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
    _id: "1",
    heading: "tyu",
    content: "tyu ssstyu yyy",
    description: "tyua",
    publishedAt: "2018",
    author: "Bebeshka",
    urlToImage: "//mock2"
  }
];

const articleForUpdateMock = 
  {
    _id: "0123",
    heading: "fff",
    content: "asdfsdf yyy",
    description: "asdsdfsdf",
    publishedAt: "2017",
    author: "Rddddob",
    urlToImage: "//moddddck1"
  };

const articleMock = articlesMock[1];

function ItemNewsMock() {
  return ItemNewsMock;
}

const errorMessage = "Error!";

let findCbArgs, deleteCbArgs, updateCbArgs;

ItemNewsMock.find = (filter, cb) => {
  cb(...findCbArgs);
};

ItemNewsMock.updateOne = (filter, obj, cb) => {
  cb(...updateCbArgs);
};

ItemNewsMock.deleteOne = (filter, cb) => {
  cb(...deleteCbArgs);
};

const articlesRouteMock = proxyquire("../routes/articles", {
  "../models": {
    ItemNews: ItemNewsMock
  }
});

const routesMock = proxyquire("../routes", {
  "./articles": articlesRouteMock
});

const app = proxyquire("../app", {
  passport: {
    use: () => {},
    initialize: () => {
      return (req, res, next) => next();
    },
    session: () => {
      return (req, res, next) => next();
    }
  },
  "./routes": routesMock
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
});

describe("articles", () => {
  describe("GET to /", () => {
    it("should return list articles", done => {
      findCbArgs = [null, articlesMock];
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.should.be.eql(articlesMock);
          done();
        });
    });

    it("should return status 404 if there are no articles", done => {
      findCbArgs = [null, []];
      chai
        .request(app)
        .get("/news")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe("DELETE to /deleteArticle/:id", () => {
    it("should return status 200", done => {
      deleteCbArgs = [null];
      chai
        .request(app)
        .delete("/deleteArticle/1")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it("should return status 404 in case of error", done => {
      deleteCbArgs = [errorMessage];
      chai
        .request(app)
        .delete("/deleteArticle/1")
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe("UPDATE to /updateArticle/:id", () => {
    it("should return status 200", done => {
      updateCbArgs = [null, articleMock];
      chai
        .request(app)
        .put("/updateArticle/1")
        .send(articleForUpdateMock)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.be.eql(articleMock);
          done();
        });
    });

    it("should return status 404 in case of error", done => {
      updateCbArgs = [errorMessage];
      chai
        .request(app)
        .put("/updateArticle/1")
        .send(articleForUpdateMock)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});

/**
 * 
 *   describe("GET to /test", () => {
    it("should return Admin greting", done => {
      chai
        .request(app)
        .get("/test")
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.eql("Test hello");
          done();
        });
    });
  });
 */
