import { useEffect, useState } from 'react';

import { Text, H4 } from '../components/atoms/typography';
import CategoryForm from '../components/forms/category-form';
import ProductForm from '../components/forms/product-form';
import { Table, TableWrapper } from '../components/atoms/table';
import { List, ListItem, ListAction } from '../components/atoms/list';
import { SVG, TrashSvg } from '../components/atoms/svg';
import {
  FlexRow,
  FlexColumn,
  FullScreen,
  Island,
} from '../components/atoms/screen';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // const [deleteCategoryMutation] = useMutation(MUTATION_DELETE_CATEGORY);
  // const [deleteProductMutation] = useMutation(MUTATION_DELETE_PRODUCT);

  // const {
  //   loading: productLoading,
  //   data: productGQLData,
  //   refetch: refetchProduct,
  // } = useQuery(QUERY_PRODUCTS, {
  //   variables: {
  //     categoryId: selectedCategory,
  //   },
  // });
  // const {
  //   loading: categoryLoading,
  //   data: categoryGQLData,
  //   refetch: refetchCategory,
  // } = useQuery(QUERY_CATEGORIES);

  // useEffect(() => {
  //   setCategories(categoryGQLData?.getCategories || []);
  // }, [categoryGQLData]);

  // useEffect(() => {
  //   setProducts(productGQLData?.getProducts || []);
  // }, [productGQLData]);

  // useEffect(() => {
  //   refetchProduct({
  //     categoryId: selectedCategory,
  //   });
  // }, [refetchProduct, selectedCategory]);

  const handleCategoryDelete = async ({ id, title }: any) => {
    console.log({ id, title });
    // try {
    //   await deleteCategoryMutation({
    //     variables: {
    //       id,
    //     },
    //   });
    //   toast.info(`Category "${title}" has been deleted`);
    //   refetchCategory();
    // } catch (error: any) {
    //   console.error(error);
    //   toast.error(error.message);
    // }
  };

  const handleProductDelete = async ({ id, title }: any) => {
    console.log({ id, title });
    // try {
    //   await deleteProductMutation({
    //     variables: {
    //       id,
    //     },
    //   });
    //   toast.info(`Product "${title}" has been deleted`);
    //   refetchProduct({ categoryId: selectedCategory });
    // } catch (error: any) {
    //   console.error(error);
    //   toast.error(error.message);
    // }
  };

  return (
    <FullScreen>
      {/* <Island> */}
      <FlexRow>
        <FlexColumn>
          <H4 noTopMargin>Add Category</H4>
          <CategoryForm onSuccess={() => {}} />
        </FlexColumn>

        <FlexColumn flex={3}>
          <H4 noTopMargin>Add Product</H4>
          <ProductForm
            categories={[
              { id: '', title: 'Select the category' },
              ...categories,
            ]}
            onSuccess={() => {}}
          />
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn>
          <H4 noTopMargin>Categories</H4>
          {!false && (
            <List>
              {categories && categories.length > 0 ? (
                <>
                  <ListItem selected={selectedCategory === null}>
                    <FlexColumn onClick={() => setSelectedCategory(null)}>
                      <Text color="light" weight="normal">
                        All Category
                      </Text>
                    </FlexColumn>
                  </ListItem>
                  {categories.map((each: any) => (
                    <ListItem
                      key={each.id}
                      selected={selectedCategory === each.id}
                    >
                      <FlexColumn onClick={() => setSelectedCategory(each.id)}>
                        <Text color="light" weight="normal">
                          {each.title}
                        </Text>
                      </FlexColumn>
                      {!false &&
                      selectedCategory === each.id &&
                      products.length === 0 ? (
                        <ListAction
                          flex={0}
                          onClick={() => handleCategoryDelete(each)}
                        >
                          <SVG size="small" mode="caution">
                            <TrashSvg />
                          </SVG>
                        </ListAction>
                      ) : (
                        <></>
                      )}
                    </ListItem>
                  ))}
                </>
              ) : (
                <FlexColumn>
                  <Text color="light" weight="normal">
                    No Category Found
                  </Text>
                </FlexColumn>
              )}
            </List>
          )}
        </FlexColumn>

        <FlexColumn flex={3}>
          <H4 noTopMargin>Products</H4>
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

              {!false && (
                <>
                  {products && products.length > 0 ? (
                    <tbody>
                      {products.map((each: any, index: number) => (
                        <tr key={each.id}>
                          <td>{each.title}</td>
                          <td>{each.category.title}</td>
                          <td>{each.price}</td>
                          <td>
                            <SVG
                              size="small"
                              mode="caution"
                              justify="start"
                              onClick={() => handleProductDelete(each)}
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
                          <ListAction>
                            <Text color="light" weight="normal">
                              No Product Found
                            </Text>
                          </ListAction>
                        </td>
                      </tr>
                    </tbody>
                  )}
                </>
              )}
            </Table>
          </TableWrapper>
        </FlexColumn>
      </FlexRow>
      {/* </Island> */}
    </FullScreen>
  );
};

export default Products;
