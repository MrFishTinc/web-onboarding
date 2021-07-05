let store = {
  gender: "",
  target: "",
  activities: "",
  age: "",
  height: "",
  weight: "",
  goalWeight: "",
  diet: "",
  zone: "",
  level: "",
  track: "",
  work: "",
  time: "",
}

export const changeStoreActive = (text, step) => {
  switch (step) {
    case 0:
      return (
        store.gender = text
      )
    case 1:
      return (
        store.target = text
      )
    case 2:
      return (
        store.activities = text
      )
    case 3:
      return (
        store.age = text
      )
    case 4:
      return (
        store.height = text
      )
    case 5:
      return (
        store.weight = text
      )
    case 6:
      return (
        store.goalWeight = text
      )
    case 7:
      return (
        store.diet = text
      )
    case 8:
      return (
        store.zone = text
      )
    case 9:
      return (
        store.level = text
      )
    case 10:
      return (
        store.track = text
      )
    case 11:
      return (
        store.work = text
      )
    case 12:
      return (
        store.time = text
      )
    default: <div>Error</div>
  }
}

export default store
