const pagesRoot = document.location.href.split('/').slice(0, -1).join('/')
const filename = document.location.pathname.split('/').slice(-1)[0]
const filenameNumericId = parseInt(filename.split('.')[0])
const lastPageNumericId = 15

document.addEventListener('DOMContentLoaded', event => {
  console.log('READY')
  const previousPage = () => {
    console.log('previousPage')
    const previousPageNumericId = filenameNumericId - 1
    if (previousPageNumericId < 1) return
    navigatePage(previousPageNumericId)
  }

  const nextPage = () => {
    console.log('nextPage')
    const nextPageNumericId = filenameNumericId + 1
    if (nextPageNumericId > lastPageNumericId) return
    navigatePage(nextPageNumericId)
  }

  const navigatePage = pageNumericId => {
    console.log('navigatePage', pageNumericId)
    document.location.href = `${pagesRoot}/${pageNumericId}.html`
  }

  const actionKeys = {
    ArrowLeft: previousPage,
    ArrowRight: nextPage
  }

  const onKeydown = event => {
    console.log('onKeydown', event)
    const { key } = event
    console.log('event', event)
    console.log('key', key)
    if (actionKeys[key]) actionKeys[key]()
  }

  window.onKeydown = onKeydown
  document.addEventListener('keydown', onKeydown)
})