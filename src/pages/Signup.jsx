import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import Header from "../components/Nabar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const navigate = useNavigate();

  const createAccount = async () => {
    if (fullname && email && password & cpassword) {
      if (password === cpassword) {
        // const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
            setfullname("");
            setemail("");
            setpassword("");
            setcpassword("");
            // Add a new document in collection "cities"
            await setDoc(doc(db, "students", user.uid), {
              fullname: fullname,
              email: email,
              userid: user.uid,
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      } else {
        alert("confirm password should be match with password");
      }
    } else {
      alert("all fields are required");
    }

    // Validation
  };

  console.log(fullname);
  console.log(email);
  console.log(password);
  console.log(cpassword);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="shadow">
              <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}

                <div>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={fullname}
                      onChange={(e) => setfullname(e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                      />
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="position-absolute end-0 top-50 translate-middle-y me-2"
                        style={{ border: "none" }}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "👁️" : "👁️‍🗨️"}
                      </Button>
                    </div>
                    <Form.Text className="text-muted">
                      Password must be at least 6 characters long.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={cpassword}
                        onChange={(e) => setcpassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                      />
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="position-absolute end-0 top-50 translate-middle-y me-2"
                        style={{ border: "none" }}
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                      </Button>
                    </div>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mb-3"
                    disabled={loading}
                    onClick={createAccount}
                  >
                    {loading ? "Creating Account..." : "Sign Up"}
                  </Button>
                </div>

                <div className="text-center">
                  <p>
                    Already have an account? <Link to="/login">Login here</Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
