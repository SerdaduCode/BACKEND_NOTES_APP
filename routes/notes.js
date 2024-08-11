export default (router, controller) => {
  router.post("/notes", controller.addNote);
  router.get("/notes", controller.getNote);

  return router;
};
