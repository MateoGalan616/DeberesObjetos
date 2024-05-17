import { FC } from 'react';
import { Input } from 'antd';

const SearchBar: FC = () => {
  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <Input.Search
      placeholder="Search"
      onSearch={onSearch}
      enterButton
    />
  );
};

export default SearchBar;
