
export default function Button(content, styles) {
    // console.log(styles)
    return (`
    <button class="${styles.map(style => (`${style}`)).join(" ")}">
      ${content}
    </button>`
    )
}
