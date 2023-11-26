import { Router } from "express";

const viewRouter = Router();
/* GET home page. */
viewRouter.get("/", function (req, res, next) {
    if (!req.cookies.accesstoken) {
        res.render("index", {
            title: "DAITDA",
            login: "no",
        });
    } else {
        res.render("index", {
            title: "DAITDA",
            login: "yes",
        });
    }
    // res.render("index", { title: "Express" });
});
viewRouter.get("/signup", function (req, res, next) {
    res.render("signup", { title: "DAITDA Sign up" });
});
viewRouter.get("/login", function (req, res, next) {
    res.render("login", { title: "Login" });
});
viewRouter.get("/user/mypage", function (req, res, next) {
    res.render("profile", { title: "My page" });
});
//상권 포스트 상세정보 /post/:id
viewRouter.get("/post", function (req, res, next) {
    //파라미터로 id 받아오기
    res.render("post", { title: `Post` });
    // res.render("post", { title: `Post ${id}`,id });
});
viewRouter.get("/user/withdrawal", function (req, res, next) {
    res.render("withdrawal", { title: "회원 탈퇴" });
});

export { viewRouter };