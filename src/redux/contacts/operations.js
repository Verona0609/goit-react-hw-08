import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instanse } from "../auth/operations";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instanse.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contact/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await instanse.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/delete/contact",
  async (contactId, thunkAPI) => {
    try {
      await instanse.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
