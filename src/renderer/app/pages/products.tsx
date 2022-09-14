/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Text, H6 } from '../components/atoms/typography';
import CategoryForm from '../components/forms/category-form';
import ProductForm from '../components/forms/product-form';
import { Table, TableWrapper } from '../components/atoms/table';
import { List, ListItem, ListAction } from '../components/atoms/list';
import { SVG, TrashSvg } from '../components/atoms/svg';
import {
  FlexRow,
  FlexColumn,
  FlexSpace,
  Island,
} from '../components/atoms/screen';
import DashboardLayout from '../components/organisms/dashboard-layout';
import { Button } from '../components/atoms/button';

const CategoryWrapper = styled(FlexColumn)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  overflow: hidden;
`;

const ProductWrapper = styled(FlexColumn)`
  grid-column-start: 4;
  grid-column-end: -1;
  grid-row-start: 2;
  grid-row-end: 4;
  overflow: hidden;
`;

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([
    {
      id: 'Soup',
      name: 'Soup',
    },
    {
      id: 'stater',
      name: 'Non veg Stater',
    },
    {
      id: 'juice',
      name: 'Juice',
    },
  ]);
  const [products, setProducts] = useState([
    {
      id: 'SoupC',
      name: 'Chicken Soup',
      category: 'Soup',
      price: 30.44,
    },
    {
      id: 'SoupC',
      name: 'Chicken Soup',
      category: 'Soup',
      price: 30.44,
    },
    {
      id: 'SoupC',
      name: 'Chicken Soup',
      category: 'Soup',
      price: 30.44,
    },
    {
      id: 'SoupC',
      name: 'Chicken Soup',
      category: 'Soup',
      price: 30.44,
    },
    {
      id: 'SoupC',
      name: 'Chicken Soup',
      category: 'Soup',
      price: 30.44,
    },
  ]);

  const handleCategoryDelete = async () => {};

  const handleProductDelete = async () => {};

  return (
    <DashboardLayout>
      {/* <FlexRow>
        <FlexColumn>
          <H6 noTopMargin>Add Category</H6>
          <CategoryForm onSuccess={() => {}} />
        </FlexColumn>

        <FlexColumn flex={3}>
          <H6 noTopMargin>Add Product</H6>
          <ProductForm
            categories={[
              { id: '', title: 'Select the category' },
              ...categories,
            ]}
            onSuccess={() => {}}
          />
        </FlexColumn>
      </FlexRow> */}
      <CategoryWrapper>
        <H6 noMargin align="left" borderBottom color="normal">
          Categories
        </H6>
        <List>
          {categories && categories.length > 0 ? (
            categories.map((each: any, index: number) => (
              <ListItem
                key={`${each.id}_${index}`}
                selected={selectedCategory === each.id}
              >
                <FlexSpace onClick={() => setSelectedCategory(each.id)}>
                  <Text color="light">{each.name}</Text>
                </FlexSpace>
                {!false &&
                selectedCategory === each.id &&
                products.length === 0 ? (
                  <ListAction flex={0} onClick={() => handleCategoryDelete()}>
                    <SVG size="small" color="caution">
                      <TrashSvg />
                    </SVG>
                  </ListAction>
                ) : (
                  <></>
                )}
              </ListItem>
            ))
          ) : (
            <FlexColumn>
              <Text color="light" weight="normal">
                No Category Found
              </Text>
            </FlexColumn>
          )}
        </List>
      </CategoryWrapper>

      <ProductWrapper>
        <FlexSpace>
          <H6 noMargin color="normal">
            Products
          </H6>
          <Button color="ghost">All products</Button>
        </FlexSpace>
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            {products && products.length > 0 ? (
              <tbody>
                {products.map((each: any) => (
                  <tr key={each.id}>
                    <td>{each.name}</td>
                    <td>{each.category}</td>
                    <td>{each.price}</td>
                    <td>
                      <SVG
                        size="small"
                        color="caution"
                        justify="start"
                        onClick={() => handleProductDelete()}
                      >
                        <TrashSvg />
                      </SVG>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td>
                    <Text color="light" weight="normal">
                      No Product Found
                    </Text>
                  </td>
                </tr>
              </tbody>
            )}
          </Table>
        </TableWrapper>
      </ProductWrapper>
    </DashboardLayout>
  );
};

export default Products;
