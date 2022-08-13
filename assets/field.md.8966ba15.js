import{_ as s}from"./chunks/field.99d056e4.js";import{_ as a,c as n,o as l,a as p}from"./app.b0bccede.js";const u=JSON.parse('{"title":"Using the field","description":"","frontmatter":{},"headers":[{"level":2,"title":"Using the field on a Nova Resource","slug":"using-the-field-on-a-nova-resource"},{"level":2,"title":"Multiple selection on the form field","slug":"multiple-selection-on-the-form-field"},{"level":2,"title":"Validation","slug":"validation"},{"level":2,"title":"Saving the disk name alongside the path","slug":"saving-the-disk-name-alongside-the-path"}],"relativePath":"field.md"}'),o={name:"field.md"},e=p(`<h1 id="using-the-field" tabindex="-1">Using the field <a class="header-anchor" href="#using-the-field" aria-hidden="true">#</a></h1><h2 id="using-the-field-on-a-nova-resource" tabindex="-1">Using the field on a Nova Resource <a class="header-anchor" href="#using-the-field-on-a-nova-resource" aria-hidden="true">#</a></h2><p>You can start using the field by adding a <code>FileManager</code> field to your Nova resource :</p><div class="language-php"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// app/Nova/Project.php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">BBSLab</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">NovaFileManager</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">FileManager</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Project</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Resource</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fields</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">NovaRequest</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">array</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// ... any other fields</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">FileManager</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Attachments</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">attachments</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u{1F389} You have now successfully added a File Manager field to your resource.</p><img src="`+s+`" alt="field"><h2 id="multiple-selection-on-the-form-field" tabindex="-1">Multiple selection on the form field <a class="header-anchor" href="#multiple-selection-on-the-form-field" aria-hidden="true">#</a></h2><p>When using the <code>FileManager</code> field on your Nova resource, you can tell the tool to allow multiple selection for your attribute.</p><p>By default, the tool will only allow single selection.</p><p>You can allow multiple selection by using the <code>multiple</code> method to the field. You may limit the number of selected field by using the <code>limit</code> method.</p><div class="language-php"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// app/Nova/Project.php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">BBSLab</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">NovaFileManager</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">FileManager</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Project</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Resource</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fields</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">NovaRequest</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">array</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// ... any other fields</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">FileManager</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Attachments</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">attachments</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">multiple</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">limit</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p><strong>Note</strong> If the limit is set to 1, the field saves the value as a plain string containing the file&#39;s path in the specified storage disk. For any value greater than 1, the field saves the value as an array of file paths. You can access these paths easily by setting a cast on your attribute.</p></blockquote><div class="language-php"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// app/Models/Project.php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Project</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Authenticatable</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">fillable </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">attachments</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">casts </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">attachments</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">array</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="validation" tabindex="-1">Validation <a class="header-anchor" href="#validation" aria-hidden="true">#</a></h2><p>When using the field, you can specify the number of files that can be set a value for your resource&#39;s attribute.</p><p>For that, you can specifically use the following custom rule :</p><div class="language-php"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// app/Nova/Project.php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">BBSLab</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">NovaFileManager</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">FileManager</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">BBSLab</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">NovaFileManager</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Rules</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">FileLimit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Project</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Resource</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fields</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">NovaRequest</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">array</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// ... any other fields</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">FileManager</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Attachments</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">attachments</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">rules</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FileLimit</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">min</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> max</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">multiple</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">limit</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p><strong>Note</strong> You need to set up your field with <code>multiple</code> if you plan on having a minimum value greater than one, and if you expect your field to have more than one file.</p></blockquote><h2 id="saving-the-disk-name-alongside-the-path" tabindex="-1">Saving the disk name alongside the path <a class="header-anchor" href="#saving-the-disk-name-alongside-the-path" aria-hidden="true">#</a></h2><p>When using a multi-disk setup, you may want to save the disk from which the file has been picked and save it into your resource, so that, for instance, you can generate a valid url depending on the disk.</p><p>To save the disk, you&#39;ll need to add a new column to your model, to store the value.</p><p>For instance, having a <code>User</code> model to which we want to add an avatar, you can run a migration like the following :</p><div class="language-php"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">up</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">void</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Schema</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">table</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Blueprint</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">string</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">avatar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">nullable</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">string</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">avatar_disk</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">nullable</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>And then set up the field :</p><div class="language-php"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">FileManager</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Avatar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">avatar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">storeDisk</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">avatar_disk</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,25),t=[e];function c(r,D,F,y,i,C){return l(),n("div",null,t)}var h=a(o,[["render",c]]);export{u as __pageData,h as default};
