import React from "react";
export default class SearchBar extends React.Component<
  {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: any;
    onInStockChange: any;
  },
  {}
> {
  constructor(props: any) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e: any) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e: any) {
    this.props.onInStockChange(e.target.checked);
  }
  render() {
    // const filterText = this.props.filterText;
    // const inStockOnly = this.props.inStockOnly;

    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />{" "}
          Only show products in stock
        </p>
      </form>
    );
  }
}
