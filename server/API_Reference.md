# TipEasy API Reference

## User Endpoints

### `/api/me` - [GET]

Short explanation of this endpoint goes here

#### Resource Information

<table>
  <tr>
    <td><b>Format</b></td>
    <td>JSON</td>
  </tr>
  <tr>
    <td><b>Requires Authentication</b></td>
    <td>Yes</td>
  </tr>
</table>

#### Parameters

This endpoint doesn't have any parameters.

#### Response

<table>
  <tr>
    <th><b>Attributes</b></th>
    <th><b>Description</b></th>
    <th><b>Values</b></th>
    <th><b>Example</b></th>
  </tr>
  <tr>
    <td><code><b>account_type</b></code><br>[string variable]</td>
    <td>-</td>
    <td><code>sender</code><br><code>receiver</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td><code><b>name</b></code><br>[string]</td>
    <td>-</td>
    <td>[string]</td>
    <td>-</td>
  </tr>
  <tr>
    <td><code><b>email</b></code><br>[string]</td>
    <td>-</td>
    <td>[string] (email)</td>
    <td>-</td>
  </tr>
  <tr>
    <td><code><b>profile_img</b></code><br>[string]</td>
    <td>-</td>
    <td>[string] (url)<br><code>null</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td><code><b>unique_code</b></code><br>[string]</td>
    <td>-</td>
    <td>[string]<br><code>null</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td><code><b>location</b></code><br>[string]</td>
    <td>-</td>
    <td>[string]<br><code>null</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td><code><b>organisation</b></code><br>[string]</td>
    <td>-</td>
    <td>[string]<br><code>null</code></td>
    <td>-</td>
  </tr>
</table>