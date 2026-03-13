import type { Metadata, ResolvingMetadata } from 'next'


export const titleSeparator = ' · '

export const createGetMetadata = (_title: string, isAbsolute?: boolean, metadata?: Metadata) => {
  return async (_, parent: ResolvingMetadata): Promise<Metadata> => {
    const parentMeta = await parent
    const parentTitle = parentMeta.title
    const parentPart = typeof parentTitle === 'string' ? parentTitle : parentTitle.template || parentTitle.absolute || 'Azuro Gem'
    const currentPart = `%s${titleSeparator}${_title}`

    const template = parentPart.includes('%s')
      ? parentPart.replace('%s', currentPart)
      : `${currentPart}${titleSeparator}${parentPart}`

    const title: Metadata['title'] = isAbsolute ? {
      absolute: _title,
      template,
    } : {
      default: _title,
      template,
    }

    return {
      ...metadata,
      title,
    }
  }
}
