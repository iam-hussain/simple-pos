/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import useTheme from '../../utils/useTheme';
import './style.scss';

const Home: React.FC = () => {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <div className="container flex-center h-100">
      <div className="island">
        <h4
          className="modal-title"
          id="mySmallModalLabel"
          onClick={() => toggleTheme()}
        >
          Settings
        </h4>

        <form id="net_settings_form">
          <div className="row">
            <div className="form-group">
              <label htmlFor="userName">Server IP Address*</label>
              <input
                type="text"
                required
                placeholder="Enter the IP address of the admin computer."
                name="ip"
                className="form-control"
                id="ip"
              />
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="userName">Till Number*</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter a number"
                    name="till"
                    className="form-control"
                    id="till"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="form-group">
                  <label htmlFor="userName">
                    Hardware Identification Number{' '}
                  </label>
                  <input
                    type="text"
                    required
                    name="mac"
                    className="form-control"
                    id="mac"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                id="save_settings"
                type="submit"
                className="btn btn-default btn-block waves-effect waves-light"
                value="Save Settings"
              />
            </div>
          </div>
        </form>

        <form id="settings_form" encType="multipart/form-data">
          <input type="hidden" name="id" id="settings_id" />
          <input type="hidden" name="img" id="logo_img" />
          <input type="hidden" name="remove" id="remove_logo" />ð
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="userName">Store Name</label>
                <input
                  type="text"
                  required
                  name="store"
                  className="form-control"
                  id="store"
                />
              </div>
              <div className="form-group">
                <label htmlFor="userName">Address Line 1</label>
                <input
                  type="text"
                  required
                  name="address_one"
                  className="form-control"
                  id="address_one"
                />
              </div>
              <div className="form-group">
                <label htmlFor="userName">Address Line 2</label>
                <input
                  type="text"
                  required
                  name="address_two"
                  className="form-control"
                  id="address_two"
                />
              </div>
              <div className="form-group">
                <label htmlFor="userName">Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  className="form-control"
                  id="contact"
                />
              </div>
              <div className="form-group">
                <label htmlFor="userName">Vat Number</label>
                <input
                  type="text"
                  name="tax"
                  className="form-control"
                  id="tax"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="userName">Currency Symbol</label>
                <input
                  type="text"
                  required
                  name="symbol"
                  className="form-control"
                  id="symbol"
                />
              </div>

              <div className="form-group">
                <label htmlFor="userName">Vat Percentage</label>
                <div>
                  <input
                    type="text"
                    required
                    name="percentage"
                    className="form-control"
                    id="percentage"
                  />
                </div>
                <div className="pull-right p-t-10"> % </div>
              </div>
              <br />
              <br />
              <div className="form-group">
                <label>
                  <input type="checkbox" name="charge_tax" id="charge_tax" />{' '}
                  Charge Vat
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="userName">
                  <span id="rmv_logo" className="btn btn-xs btn-warning">
                    Remove
                  </span>{' '}
                  Logo{' '}
                </label>
                <div id="current_logo" />

                <input type="file" name="imagename" id="logoname" />
              </div>
              <div className="form-group">
                <label htmlFor="userName">Receipt Footer</label>
                <textarea name="footer" className="form-control" id="footer" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              id="save_settings"
              type="submit"
              className="btn btn-default btn-block waves-effect waves-light"
              value="Save Settings"
            />
          </div>
          <button type="button" className="btn btn-primary">
            Save It
          </button>
          <button type="button" className="btn btn-secondary">
            Save It
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
