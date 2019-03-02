import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { ArrowRightIcon, ArrowLeftIcon } from "./../Icon/index.jsx";
import PaginationWrapper from "./pagination.css.js";

class Pagination extends Component {
  static defaultProps = {
    prefixCls: "sky-pagination",
    defaultCurrent: 1,
    defaultPageSize: 10,
    onChange: () => {},
    hideOnSinglePage: false,
    showQuickJumper: false,
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.string),
    current: PropTypes.number,
    defaultCurrent: PropTypes.number,
    pageSize: PropTypes.number,
    defaultPageSize: PropTypes.number,
    total: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    hideOnSinglePage: PropTypes.bool,
    showTotal: PropTypes.func,
    showQuickJumper: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      current: props.current || props.defaultCurrent,
      pageSize: props.pageSize || props.defaultPageSize,
    };
  }

  get pageCount() {
    const { total } = this.props;
    const { pageSize } = this.state;
    return Math.ceil(total / pageSize);
  }

  get current() {
    const { current } = this.state;
    return Math.min(current, this.pageCount);
  }

  handleQuickJumper = (event) => {
    const {
      target: { value: jumpPage },
      keyCode,
    } = event;

    if (!jumpPage) {
      return;
    }

    if (keyCode === 13) {
      this.onPageChange(Number(jumpPage));
      this.quickJumperInput.value = "";
    }
  };

  onPageChange = (page) => {
    const { onChange } = this.props;
    const { pageSize } = this.state;
    let realPage = page;

    if (page < 1) {
      realPage = 1;
    }

    if (page >= this.pageCount) {
      realPage = this.pageCount;
    }

    this.setState({ current: realPage }, () => {
      onChange(realPage, pageSize);
    });
  };

  renderPager = (page, current) => {
    const { prefixCls } = this.props;

    const child = <a onClick={() => this.onPageChange(page)}>{page}</a>;

    const element = (
      <li
        key={page}
        title={page}
        className={classNames(`${prefixCls}-item`, `${prefixCls}-item-${page}`, {
          [`${prefixCls}-item-selected`]: page === current,
        })}
      >
        {child}
      </li>
    );

    return {
      current,
      page,
      element,
      type: "page",
    };
  };

  renderFirstPager = () => {
    const { prefixCls } = this.props;

    const child = <a onClick={() => this.onPageChange(1)}>1</a>;

    const element = (
      <li key="1" title="1" className={classNames(`${prefixCls}-item`, `${prefixCls}-item-1`)}>
        {child}
      </li>
    );

    return {
      current: this.current,
      page: 1,
      element,
      type: "page",
    };
  };

  renderLastPager = (pageCount) => {
    const { prefixCls } = this.props;

    const child = <a onClick={() => this.onPageChange(pageCount)}>{pageCount}</a>;

    const element = (
      <li
        key={pageCount}
        title={pageCount}
        className={classNames(`${prefixCls}-item`, `${prefixCls}-item-${pageCount}`)}
      >
        {child}
      </li>
    );

    return {
      current: this.current,
      page: pageCount,
      element,
      type: "pager",
    };
  };

  renderPrevPageBtn = (current) => {
    const { prefixCls } = this.props;
    const child = (
      <a onClick={() => this.onPageChange(current - 1)}>
        <ArrowLeftIcon />
      </a>
    );

    const element = (
      <li
        title="上一页"
        key="prev"
        className={classNames(`${prefixCls}-item`, `${prefixCls}-item-prev`, {
          [`${prefixCls}-item-disabled`]: current === 1,
        })}
      >
        {child}
      </li>
    );

    return {
      current,
      page: null,
      element,
      type: "prev",
    };
  };

  renderNextPageBtn = (current, pageCount) => {
    const { prefixCls } = this.props;
    const child = (
      <a onClick={() => this.onPageChange(current + 1)}>
        <ArrowRightIcon />
      </a>
    );

    const element = (
      <li
        title="下一页"
        key="next"
        className={classNames(`${prefixCls}-item`, `${prefixCls}-item-next`, {
          [`${prefixCls}-item-disabled`]: current === pageCount,
        })}
      >
        {child}
      </li>
    );

    return {
      current,
      page: null,
      element,
      type: "next",
    };
  };

  renderJumpPrev = (current) => {
    const { prefixCls } = this.props;
    const child = (
      <a onClick={() => this.onPageChange(current - 5)}>
        <span className={`${prefixCls}-item-ellipsis`}>···</span>
        <span className={`${prefixCls}-item-jump-arrow`}>{"<<"}</span>
      </a>
    );

    const element = (
      <li
        key="jump-prev"
        title="向前5页"
        className={classNames(`${prefixCls}-item`, `${prefixCls}-item-jump`)}
      >
        {child}
      </li>
    );

    return {
      current,
      page: null,
      element,
      type: "jumper-prev",
    };
  };

  renderJumpNext = (current) => {
    const { prefixCls } = this.props;
    const child = (
      <a onClick={() => this.onPageChange(current + 5)}>
        <span className={`${prefixCls}-item-ellipsis`}>···</span>
        <span className={`${prefixCls}-item-jump-arrow`}>{">>"}</span>
      </a>
    );

    const element = (
      <li
        key="jump-next"
        title="向后5页"
        className={classNames(`${prefixCls}-item`, `${prefixCls}-item-jump`)}
      >
        {child}
      </li>
    );

    return {
      current,
      page: null,
      element,
      type: "jumper-next",
    };
  };

  renderPagerList = () => {
    const pagerList = [];
    const {
      pageCount,
      state: { current: currentPage },
    } = this;

    if (pageCount <= 9) {
      for (let i = 1; i <= pageCount; i += 1) {
        pagerList.push(this.renderPager(i, currentPage).element);
      }
    } else {
      let left = Math.max(1, currentPage - 2);
      let right = Math.min(currentPage + 2, pageCount);

      if (currentPage - 1 <= 2) {
        right = 1 + 4;
      }

      if (pageCount - currentPage <= 2) {
        left = pageCount - 4;
      }

      for (let j = left; j <= right; j += 1) {
        pagerList.push(this.renderPager(j, currentPage).element);
      }

      if (currentPage - 1 >= 4) {
        pagerList.unshift(this.renderJumpPrev(currentPage).element);
      }

      if (pageCount - currentPage >= 4) {
        pagerList.push(this.renderJumpNext(currentPage).element);
      }

      if (left !== 1) {
        pagerList.unshift(this.renderFirstPager().element);
      }

      if (right !== currentPage && right !== pageCount) {
        pagerList.push(this.renderLastPager(pageCount).element);
      }
    }

    pagerList.unshift(this.renderPrevPageBtn(currentPage).element);
    pagerList.push(this.renderNextPageBtn(currentPage, pageCount).element);

    return pagerList;
  };

  renderTotal = () => {
    const { showTotal, prefixCls, total } = this.props;
    const { pageSize } = this.state;
    const range = [pageSize * this.current - (pageSize - 1), pageSize * this.current];

    if (showTotal && typeof showTotal === "function") {
      return (
        <li className={classNames(`${prefixCls}-item`, `${prefixCls}-item-total`)}>
          {showTotal(total, range)}
        </li>
      );
    }

    return null;
  };

  renderQuickJumper = () => {
    const { prefixCls, showQuickJumper } = this.props;

    if (showQuickJumper) {
      return (
        <li className={classNames(`${prefixCls}-item`, `${prefixCls}-item-quick-jumper`)}>
          <span>跳至</span>
          <input
            type="text"
            onKeyDown={this.handleQuickJumper}
            ref={(node) => (this.quickJumperInput = node)}
          />
          <span>页</span>
        </li>
      );
    }

    return null;
  };

  render() {
    const { prefixCls, className, style, hideOnSinglePage } = this.props;
    const paginationWrapperClassName = classNames(`${prefixCls}-wrapper`, className, {
      [`${prefixCls}-wrapper-single`]: hideOnSinglePage && this.pageCount === 1,
    });

    return (
      <PaginationWrapper prefixCls={prefixCls} style={style} className={paginationWrapperClassName}>
        {this.renderTotal()}
        {this.renderPagerList()}
        {this.renderQuickJumper()}
      </PaginationWrapper>
    );
  }
}

export default Pagination;
