export const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const usernamePattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))$/;

/* Username validation:
  [^<>()[\]\\.,;:\s@"] => match any character except for whitespaces and:
                            < > \ . , ; : @ ( ) [ ] "
  OR: 
  (".+")               => anything in double quotes
*/

// TODO: discuss rules for allowed characters
export const passwordPattern = /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^*()\-=_+[\]{}|;:,.?`~])(?!.*\s)(?![.\n]).*$/;

/* Password validation:
  (?=^.{8,})      =>  at least 8 characters long
  (?=.*[a-z])     =>  at least 1 lowercase letter
  (?=.*[A-Z])     =>  at least 1 UPPERCASE letter
  (?=.*\d)        =>  at least 1 digit/number
  (?=.*[!@#$%^*()\-=_+[\]{}|\;:,.?`~])
                  =>  At least 1 special character:
                        ! @ # $ % ^ * ( ) - = _ +
                        [ ] { } | \ ; : , . ? ` ~
                      Which does NOT include:
                        & < > " ' /
  (?!.*\s)        =>  no white spaces
  (?![.\n])       =>  no line breaks
*/

const validPatterns = {
  email: emailPattern,
  password: passwordPattern,
  username: usernamePattern,
};

export const validatePattern = (strToTest, pattern) =>
  validPatterns[pattern].test(strToTest);

export const reduceConditions = conditions =>
	conditions.reduce((acc, condition) => (acc && condition));
