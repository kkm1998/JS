class Createon {
    constructor() {
    }
    static CreateDiv() {
        let note = document.createElement('div')
        note.classList.add('Note');
        return note
    }
    static CreateBar() {
        let bar = document.createElement('div')
        bar.classList.add('Bar');
        return bar
    }
    static CreateSave(table) {
        let saveBtnEl = document.createElement('button')
        saveBtnEl.classList.add('saveButton');
        saveBtnEl.setAttribute('title', 'Save Note')
        saveBtnEl.addEventListener('click', () => Notes.onSave(table), false)
        return saveBtnEl
    }
    static CreateDelete(table) {
        let deleteBtnEl = document.createElement('button')
        deleteBtnEl.classList.add('deleteButton');
        deleteBtnEl.setAttribute('title', 'Delete Note')

        deleteBtnEl.addEventListener('click', () => Notes.onDelete(table), false)
        return deleteBtnEl
    }
    static CreateColor(note) {
        let colorBtnEl = document.createElement('input')
        colorBtnEl.classList.add('colorButton');
        colorBtnEl.setAttribute('type', 'color')
        colorBtnEl.setAttribute('title', 'Change Note Color')
        colorBtnEl.setAttribute('value', '#ffffff')
        colorBtnEl.addEventListener('change', () => Notes.onChange(note, colorBtnEl), false)
        return colorBtnEl
    }
    static CreateColorBar(bar) {
        let colorBarBtnEl = document.createElement('input')
        colorBarBtnEl.classList.add('colorBarButton');
        colorBarBtnEl.setAttribute('type', 'color')
        colorBarBtnEl.setAttribute('title', 'Change Bar Color')
        colorBarBtnEl.setAttribute('value', '#34b339')
        colorBarBtnEl.addEventListener('change', () => Notes.onChangeBar(bar, colorBarBtnEl), false)
        return colorBarBtnEl
    }
    static CreateTitle() {
        let title_text = document.createElement('div')
        title_text.classList.add('Title')
        title_text.setAttribute('contenteditable', true)
        title_text.setAttribute('placeholder', 'Title')
        title_text.querySelector('.Title[contenteditable]')
        return title_text
    }
    static CreateBody() {
        let body_text = document.createElement('div')
        body_text.classList.add('Text')
        body_text.setAttribute('contenteditable', true)
        body_text.setAttribute('placeholder', 'Text')
        body_text.querySelector('.Text[contenteditable]')
        return body_text
    }
    static CreateFooter() {
        let footer = document.createElement('div')
        footer.classList.add('Footer')
        return footer
    }
    static createDate() {
        let date = document.createElement('span')
        date.setAttribute('id', 'Date')
        return date
    }
    static CreatePin(note) {
        let pinBtnEl = document.createElement('div')
        pinBtnEl.classList.add('pinButton')
        pinBtnEl.setAttribute('title', 'Pin Note')
        pinBtnEl.addEventListener('click', () => Notes.goPin(note), false)
        return pinBtnEl
    }
    static CreateDivTag() {
        let Tag_text = document.createElement('textarea')
        Tag_text.classList.add('Tag')
        Tag_text.setAttribute('maxlength', '20')
        Tag_text.setAttribute('placeholder', '#Tag')
        return Tag_text
    }
    //#region MenuZWyborem
    // static CreateMenu() {
    //     let Menu = document.createElement('div')
    //     Menu.classList.add('Menu')
    //     return Menu
    // }
    // static CreateMenu_Title() {
    //     let Menu_Title = document.createElement('div')
    //     Menu_Title.classList.add('CreateMenu_Title')
    //     return Menu_Title
    // }
    // static CreateMenu_Title_Size() {
    //     let Menu_Title_Size = document.createElement('div')
    //     Menu_Title_Size.classList.add('CreateMenu_Title_Size')
    //     return Menu_Title_Size
    // }
    // static CreateMenu_Title_Color() {
    //     let Menu_Title_Color = document.createElement('div')
    //     Menu_Title_Color.classList.add('CreateMenu_Title_Color')
    //     return Menu_Title_Color
    // }
    // static CreateMenu_Title_Font() {
    //     let Menu_Title_Font = document.createElement('div')
    //     Menu_Title_Font.classList.add('CreateMenu_Title_Font')
    //     return Menu_Title_Font
    // }
    // static CreateMenu_Body() {
    //     let Menu_Body = document.createElement('div')
    //     Menu_Body.classList.add('CreateMenu_Body')
    //     return Menu_Body
    // }
    // static CreateMenu_Body_Size() {
    //     let Menu_Body_Size = document.createElement('div')
    //     Menu_Body_Size.classList.add('CreateMenu_Body_Size')
    //     return Menu_Body_Size
    // }
    // static CreateMenu_Body_Color() {
    //     let Menu_Body_Color = document.createElement('div')
    //     Menu_Body_Color.classList.add('CreateMenu_Body_Color')
    //     return Menu_Body_Color
    // }
    // static CreateMenu_Body_Font() {
    //     let Menu_Body_Font = document.createElement('div')
    //     Menu_Body_Font.classList.add('CreateMenu_Body_Font')
    //     return Menu_Body_Font
    // }




    // static CreateMenu_Title_Span() {
    //     let Menu_Title_Span = document.createElement('span')
    //     Menu_Title_Span.classList.add('CreateMenu_Title_Span')
    //     console.log(document.getElementsByClassName('CreateMenu_Title_Span').i)
    //     return Menu_Title_Span
    // }
    // static CreateMenu_Title_Size_Spam() {
    //     let Menu_Title_Size_Spam = document.createElement('span')
    //     Menu_Title_Size_Spam.classList.add('CreateMenu_Title_Size_Spam')
    //     return Menu_Title_Size_Spam
    // }
    // static CreateMenu_Title_Color_Span() {
    //     let Menu_Title_Color_Span = document.createElement('span')
    //     Menu_Title_Color_Span.classList.add('CreateMenu_Title_Color_Span')
    //     return Menu_Title_Color_Span
    // }
    // static CreateMenu_Title_Font_Span() {
    //     let Menu_Title_Font_Span = document.createElement('span')
    //     Menu_Title_Font_Span.classList.add('CreateMenu_Title_Font_Span')
    //     return Menu_Title_Font_Span
    // }
    // static CreateMenu_Body_Span() {
    //     let Menu_Body_Span = document.createElement('span')
    //     Menu_Body_Span.classList.add('CreateMenu_Body_Span')
    //     return Menu_Body_Span
    // }
    // static CreateMenu_Body_Size_Span() {
    //     let Menu_Body_Size_Span = document.createElement('span')
    //     Menu_Body_Size_Span.classList.add('CreateMenu_Body_Size_Span')
    //     return Menu_Body_Size_Span
    // }
    // static CreateMenu_Body_Color_Span() {
    //     let Menu_Body_Color_Span = document.createElement('span')
    //     Menu_Body_Color_Span.classList.add('CreateMenu_Body_Color_Span')
    //     return Menu_Body_Color_Span
    // }
    // static CreateMenu_Body_Font_Span() {
    //     let Menu_Body_Font_Span = document.createElement('span')
    //     Menu_Body_Font_Span.classList.add('CreateMenu_Body_Font_Span')
    //     return Menu_Body_Font_Span
    // }
//#endregion
}