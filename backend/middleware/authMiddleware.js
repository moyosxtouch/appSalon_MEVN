const authMiddleware = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    console.log("si hay token");
  } else {
    const error = new Error("Token no válido o inexistente");
    res.status(403).json({ msg: error.message });
  }
};
export default authMiddleware;
