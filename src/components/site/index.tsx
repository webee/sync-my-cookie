import React, { Component } from 'react';
const style = require('./index.scss');
const X = require('react-feather/dist/icons/x').default;

interface Prop {
  domain: string;
  className?: string;
  active?: boolean;
}

class Site extends Component<Prop> {
  public render() {
    return (
      <div className={this.props.className}>
        <div className={[style.wrapper, this.props.active && style.active].join(' ')}>
          <img
            className={style.img}
            src={`https://${this.props.domain}/favicon.ico`}
            alt='site icon'
            onError={this.handleImageError}
          />
          <span className={style.domain}>
            {this.props.domain}
          </span>
          <div className={style.close}>
            <X />
          </div>
        </div>
      </div>
    );
  }
  private handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).style.opacity = '0';
  }
}

export default Site;