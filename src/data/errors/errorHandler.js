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

export const handleCategoryError = (err) => {
  let error = ""
  switch (err.code) {
    case "categories/category-exists":
      error = "Postoji već ta kategorija."
      break
    case "categories/name-too-long":
      error = "Predugačko ime kategorije."
      break
  }
  return error
}