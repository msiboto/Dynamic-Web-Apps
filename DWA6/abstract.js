/* eslint-disable import/extensions */
import { authors} from './data.js'
/**
 * Generates book previews and appends them to the list.
 */

// eslint-disable-next-line import/prefer-default-export
export const createPreview = (id, image, title, author) => {
    const element = document.createElement('button')
    element.classList = 'preview'
    element.setAttribute('data-preview', id)
    
    element.innerHTML = `
            <img
            class="preview__image"
            src="${image}"
            />
            
            <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            // eslint-disable-next-line no-undef
            <div class="preview__author">${authors[author]}</div>
            </div>
        `
return element
}