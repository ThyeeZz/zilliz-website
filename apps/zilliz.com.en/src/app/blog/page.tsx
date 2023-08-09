import React from 'react';
import { Button } from 'ui';
import classes from 'common-styles';

export default function Blog() {
  const { blogClasses } = classes;
  return (
    <div className={classes.blogClasses.blogPageContainer}>
      <div className={classes.blogClasses.titleWrapper}>
        <p className={blogClasses.title}>
          虑到我们的不同项目在业务和组件交互上存在很多相似性，可以考虑在不同项目中使用公共组件库和公共依赖库。目前为了实现模块复用,采用
          monorepo 风格管理项目就比较合适了。 monorepo
          可以让多个模块共享同一个仓库，因此他们可以共享同一套构建流程、代码规范也可以做到统一，特别是如果存在模块间有共享公共组件的情况，查看代码、修改
          bug、调试等会更加方便。 作者：Jesse121
          链接：https://juejin.cn/post/7160229239840014343 来源：稀土掘金
          著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
        </p>
      </div>
    </div>
  );
}
