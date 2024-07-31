export const handleAuthError = (err) => {
  let error = ""
  switch (err.code) {
    case "users/no-user":
      error = "Ne postoji korisnik s tom email adresom."
      break
    case "auth/user-exists":
      error = "Postoji već korisnik s tom email adresom."
      break
    case "auth/email-too-long":
      error = "Email adresa predugačka."
      break
    case "auth/invalid-password":
      error = "Pogrešna šifra."
      break
  }
  return error
}