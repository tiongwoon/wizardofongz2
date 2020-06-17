const path = require('path');

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions


    const postTemplate = path.resolve('src/templates/blog-template.js');

    return graphql(`
    {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        date
                        title
                        path
                    }
                }
            }
        }


    }
    
    `).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        } 

        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}
//registers post to use the url