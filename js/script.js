let navbar_dialogs = document.querySelector(".navbar-dialogs")

let data = [
  {
    id: 1,
    nickname: "trip wow",
    avatar:
      "https://i.pinimg.com/736x/cc/cc/4d/cccc4d3c17d97e05226c10c30d8d7689.jpg",
    last_message: "Хорошо",
    time_last_message: "19:25",
  },
  {
    id: 2,
    nickname: "Gigachad",
    avatar:
      "https://upload.wikimedia.org/wikipedia/ru/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg",
    last_message:
      "Какой-то очень длинный текст, очень очень длинный текст, что он не влезает в границы блока.",
    time_last_message: "12:25",
  },
  {
    id: 3,
    nickname: "Олеся",
    avatar:
      "https://www.vokrug.tv/pic/person/6/8/f/7/68f7f1efb74c24cc4c08904fc7a245b2.jpg",
    last_message: "Я не Наталья!!!!",
    time_last_message: "09:13",
  },
  {
    id: 4,
    nickname: "Poppy",
    avatar: "https://i.scdn.co/image/ab67616d00001e02148e78020adb43391ac529e9",
    last_message: "why are you sending me your penis???",
    time_last_message: "19:25",
  },
  {
    id: 5,
    nickname: "Oleg Miami",
    avatar:
      "https://hellomagrussia.ru/uploads/1123/oleg-majami-fadeev-sygral-nemalovazhnuyu-roly-v-moej-zhizni_52584_cover_1000x725.webp",
    last_message: "Привет, бро",
    time_last_message: "14:13",
  },
]

const uploadData = () => {
  /*fetch("http://vm-c6638fea.na4u.ru:5001")
    .then(response => response.json())
    .then(datat => console.log(datat));*/

  data.sort(
    (a, b) =>
      moment(b.time_last_message, "hh:mm") -
      moment(a.time_last_message, "hh:mm")
  )
  data.map((data) => {
    const last_message =
      data.last_message.substring(0, 30) +
      (data.last_message.length > 30 ? "..." : "")
    navbar_dialogs.innerHTML +=
      '<div class="navbar-dialogs-item">' +
      '<img src="' +
      data.avatar +
      '"/>' +
      '<div class="navbar-dialogs-item-content">' +
      '<p class="nickname">' +
      data.nickname +
      "</p>" +
      '<p class="date">' +
      data.time_last_message +
      "</p>" +
      '<p class="text">' +
      last_message +
      "</p>" +
      "</div>" +
      "</div>"
  })
}

const selectDialogItemsHandler = () => {
  let header = document.querySelector(".header")
  let dialog_items = document.querySelectorAll(".navbar-dialogs-item")
  let header_textcontent_name = document.querySelector(
    ".header-textcontent-name"
  )
  let header_avatar = document.querySelector(".header-avatar")
  let header_textcontent_date = document.querySelector(
    ".header-textcontent-date"
  )
  for (let i = 0; i < dialog_items.length; i++) {
    dialog_items[i].addEventListener("click", () => {
      header.style.display = "flex"
      for (let j = 0; j < dialog_items.length; j++)
        dialog_items[j].classList.remove("active")
      dialog_items[i].classList.add("active")
      header_textcontent_name.innerHTML = data[i].nickname
      header_avatar.setAttribute("src", data[i].avatar)
      header_textcontent_date.innerHTML = data[i].time_last_message
    })
  }
}

uploadData()

selectDialogItemsHandler()
