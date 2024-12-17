import { useState } from "react";
import { auth, db } from "../firebase"; // Importa tu configuración de Firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isRegister) {
        // Registro de usuario
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Guardar datos en Firestore
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          role: "user", // Rol predeterminado
        });

        alert("Usuario registrado correctamente");
        navigate("/user-dashboard"); // Redirigir al panel del usuario registrado
      } else {
        // Inicio de sesión
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Obtener rol desde Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const role = userDoc.data().role;

          // Redirigir según el rol
          if (role === "admin") {
            navigate("/admin-dashboard"); // Redirigir al navbar de admin
          } else {
            navigate("/user-dashboard"); // Redirigir al dashboard de usuario
          }
        } else {
          throw new Error("El usuario no tiene datos asociados en Firestore");
        }
      }
    } catch (error) {
      setError("Error: " + error.message);
    }
  };

  return (
    <div>
      <h1>{isRegister ? "Registro" : "Inicio de Sesión"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          {isRegister ? "Registrar" : "Iniciar Sesión"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        {isRegister ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
        <button onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Inicia sesión" : "Regístrate"}
        </button>
      </p>
    </div>
  );
};

export default Login;
