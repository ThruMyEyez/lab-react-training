import { useState } from 'react';
//* With the use of Reactstrap
import {
  Button,
  Form,
  Label,
  Input,
  FormGroup,
  FormFeedback,
  FormText,
} from 'reactstrap';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [emailValidation, setEmailValidation] = useState('');
  const [password, setPassword] = useState('');
  const [pwValidation, setPwValidation] = useState('');
  const [nationality, setNationality] = useState(() => 'en');

  const [greeting, setGreeting] = useState(
    "Hello good afternoon. How's it going?"
  );

  const validateEmail = (event_value) => {
    setEmail(event_value);
    //[/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    const emailRegex = /^\S+@\S+\.\S+$/;
    const isValid = emailRegex.test(event_value) ? true : false;
    setEmailValidation(isValid);
  };

  const ValidatePassword = (event_value) => {
    setPassword(event_value);
    // make sure passwords are strong:
    const pwRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    const isValid = pwRegex.test(event_value) ? true : false;
    setPwValidation(isValid);
  };

  const handleNationality = (event_value) => {
    setNationality(event_value);
    const currentNation = {
      fr: 'Bonjour, bonne après-midi. Ça va?',
      de: 'Hallo, guten tag. Wie gehts?',
      en: "Hello good afternoon. How's it going?",
    };
    setGreeting(currentNation[event_value]);
  };

  return (
    <div className="box">
      <p className="mt-2">{greeting}</p>
      <Form className="text-start m-3">
        <FormGroup>
          <Label className="" for="Email">
            Email
          </Label>
          <Input
            id="Email"
            name="email"
            type="email"
            placeholder="type in a valid email"
            value={email}
            onChange={(e) => validateEmail(e.target.value)}
            valid={emailValidation === true}
            invalid={emailValidation === false}
          />
          <FormFeedback>
            Email address has to be valid. Example: artur@mail.de
          </FormFeedback>
          <FormFeedback valid>you typed a valid email</FormFeedback>
          <FormText>Please enter a valid email address.</FormText>
        </FormGroup>
        <FormGroup>
          <Label className="" for="Password">
            Password
          </Label>
          <Input
            id="Password"
            name="password"
            type="password"
            placeholder="6 Characters minimum, use low and uppercase Letters and Numbers."
            value={password}
            onChange={(e) => ValidatePassword(e.target.value)}
            valid={pwValidation === true}
            invalid={pwValidation === false}
          />
          <FormFeedback>Your password is too weak</FormFeedback>
          <FormFeedback valid>Password is valid!</FormFeedback>
          <FormText>Please enter a strong password</FormText>
        </FormGroup>

        <FormGroup>
          <Label className="" for="Nationality">
            Nationality:
          </Label>
          <Input
            id="Nationality"
            defaultValue={nationality}
            name="nationality"
            type="select"
            onChange={(e) => handleNationality(e.target.value)}
          >
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="en">English</option>
          </Input>
        </FormGroup>
        <Button className="mt-1" color="primary">
          Sign up
          {/* if (emailValidation === true && pwValidation === ) {
            //* Send email, password and nationality state to BackEnd...
          } */}
        </Button>
      </Form>
    </div>
  );
};

export default SignupPage;
