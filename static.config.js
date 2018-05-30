import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/components/HomeScreen',
      },
      {
        path: '/bio',
        component: 'src/components/BioScreen',
      },
      {
        path: '/people',
        component: 'src/components/PeopleScreen',
      },
      {
        path: '/publications',
        component: 'src/components/PublicationsScreen',
      },
      {
        path: '/news',
        component: 'src/components/NewsScreen',
      },
      {
        path: '/blog',
        component: 'src/components/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/components/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/components/404',
      },
    ]
  },
  webpack: (config, {defaultLoaders}) => {
    config.module.rules = [
      defaultLoaders.jsLoader,
      defaultLoaders.cssLoader,
      {
        loader: 'url-loader',
        exclude: [/\.js$/, /\.html$/, /\.json$/],
        query: {
          limit: 10000,
          name: 'static/[name].[ext]',
        },
      }
    ];    
    return config;
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
            <link href="img/gtfavicon.png" rel="icon" type="image/png" />
            <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400" rel="stylesheet" />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
