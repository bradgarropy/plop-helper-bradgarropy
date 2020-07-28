const helpers = plop => {
    plop.setDefaultInclude({helpers: true})

    plop.setHelper("icon", text => {
        let icon

        switch (text) {
            case "coding":
                icon = "💻"
                break

            case "life":
                icon = "😎"
                break

            case "tech":
                icon = "🔌"
                break
        }

        return icon
    })
}

module.exports = helpers
