import React from 'react';

const LayoutRoute = ({ component: Component, layout: Layout, ...rest }) => {
      return <Layout>
                <Component {...rest} />
             </Layout>
};

export default LayoutRoute;
