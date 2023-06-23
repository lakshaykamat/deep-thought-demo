export type Data = {
    _id: {
      $oid: string
    }
    _key: string
    category: string
    cid: {
      $numberDouble: string
    }
    commitment: string
    commitment_type: string
    deadline: string
    description: string
    faqs: Array<any>
    globalTags: Array<any>
    isActive: boolean
    lastposttime: number
    learning_outcomes: Array<string>
    mainPid: number
    postcount: number
    pre_requisites: Array<string>
    project_image: string
    short_description: string
    slug: string
    status: string
    tasks: Array<{
      task_id: number
      task_title: string
      task_description: string
      status: string
      assets: Array<{
        asset_id: number
        asset_title: string
        asset_description: string
        asset_content: string
        asset_type: string
        asset_content_type: string
      }>
    }>
    tid: number
    timestamp: number
    title: string
    type: string
    uid: number
    viewcount: number
    publishedAt: number
  }
  